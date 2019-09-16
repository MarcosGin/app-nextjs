import React from "react";
import { Menu } from "antd";
import NavigationDropdown from "./Dropdown";
import NavigationSubMenu from "./SubMenu";
import NavigationItem from "./Item";

const Navigation = ({ items, limitItems, showDropdownMoreItems, dropdownMoreItems }) => {
  const onClick = ({ key }) => {};

  const renderItems = (items = []) =>
    items.map(({ children, ...item }) => {
      return children && children.length > 0 ? (
        <NavigationSubMenu {...item} key={item.link} items={children} />
      ) : (
        <NavigationItem key={item.link} href="/[section]" link={item.link} text={item.text} />
      );
    });

  const dropdownOverlay = items => {
    return (
      <Menu selectedKeys={[]} onClick={onClick}>
        {renderItems(items)}
      </Menu>
    );
  };

  const moreItems = items.slice(limitItems);

  return (
    <nav>
      <Menu mode="horizontal" onClick={onClick}>
        {renderItems(items.slice(0, limitItems))}

        {showDropdownMoreItems && moreItems.length > 0 && (
          <NavigationDropdown
            title={dropdownMoreItems.title}
            key={dropdownMoreItems.key}
            overlay={dropdownOverlay(moreItems)}
            triggers={["click"]}
            onVisibleChange={() => console.log("on visible change")}
          />
        )}
      </Menu>
      {/* language=CSS*/}
      <style jsx>{`
        nav :global(.app-menu) {
          background: transparent;
          border-bottom-color: transparent;
          line-height: 26px;
        }
        :global(.app-nav-submenu-popup) :global(.app-menu-sub) {
          min-width: 0;
        }
        nav :global(.app-menu) :global(.app-menu-item),
        nav :global(.app-menu) :global(.app-menu-submenu) {
          margin: 0 40px;
          padding: 0;
        }
        nav :global(.app-menu) :global(.app-menu-submenu-title) {
          padding: 0;
        }
        nav :global(.app-menu) :global(.app-menu-item):hover,
        nav :global(.app-menu) :global(.app-menu-item-selected),
        nav :global(.app-menu) :global(.app-menu-submenu):hover,
        nav :global(.app-menu) :global(.app-menu-submenu-active) {
          border-bottom-color: #db0a40;
        }

        nav :global(.app-menu) :global(a),
        nav :global(.app-menu) :global(.app-menu-submenu-title) {
          color: #fff;
          font-size: 15px;
          text-transform: uppercase;
          font-weight: bold;
        }
        nav :global(.app-menu) :global(a):hover {
          color: #fff;
        }
      `}</style>
    </nav>
  );
};

Navigation.defaultProps = {
  items: [],
  limitItems: 3,
  showDropdownMoreItems: true,
  dropdownMoreItems: {
    key: "keyformoreitems",
    title: "More items"
  }
};

export default Navigation;
