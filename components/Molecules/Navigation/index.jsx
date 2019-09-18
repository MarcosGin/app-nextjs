import React, { useState } from "react";
import { Menu } from "antd";
import { useRouter } from "next/router";
import getActiveItem from "@Utils/getActiveItem";
import NavigationDropdown from "./Dropdown";
import NavigationSubMenu from "./SubMenu";
import NavigationItem from "./Item";

export const renderItems = (items = [], showIcon = false) =>
  items.map(({ children, ...item }) => {
    return children && children.length > 0 ? (
      <NavigationSubMenu
        {...item}
        key={item.link}
        href="/[section]"
        items={children}
        showIcon={showIcon}
      />
    ) : (
      <NavigationItem key={item.link} href="/[section]" link={item.link} text={item.text} />
    );
  });

const Navigation = ({ items, limitItems, showDropdownMoreItems, dropdownMoreItems }) => {
  const router = useRouter();
  let activeItem = "";
  if (router.query.section) {
    activeItem = getActiveItem(items, `/${router.query.section}`);
  }
  const [activeItems, setActiveItems] = useState([activeItem.link]);

  const onClick = ({ key }) => {};

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
        {renderItems(items.slice(0, limitItems), true)}

        {showDropdownMoreItems && moreItems.length > 0 && (
          <NavigationDropdown
            title={dropdownMoreItems.title}
            key={dropdownMoreItems.key}
            overlay={dropdownOverlay(moreItems)}
            triggers={["click"]}
            onVisibleChange={() => console.log("on visible change")}
            showIcon={true}
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
        :global(.app-nav-submenu-popup) :global(a),
        :global(.app-nav-dropdown) :global(a) {
          color: rgba(0, 0, 0, 0.65);
        }
        :global(.app-nav-submenu-popup) :global(.app-menu-submenu-open),
        :global(.app-nav-submenu-popup) :global(.app-menu-submenu-active),
        :global(.app-nav-submenu-popup) :global(.app-menu-submenu-title):hover,
        :global(.app-nav-submenu-popup) :global(.app-menu-submenu-title):hover :global(a) {
          color: #f5222d !important;
        }

        :global(.app-nav-submenu-popup) :global(.app-menu-submenu-arrow) {
          right: 5px !important;
        }
        nav :global(.app-menu) :global(.app-menu-item),
        nav :global(.app-menu) :global(.app-menu-submenu) {
          margin: 0 40px;
          padding: 0;
        }
        nav :global(.app-menu) :global(.app-menu-submenu-title) {
          padding: 0;
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

        nav :global(.app-menu) :global(.anticon) {
          font-size: 12px;
          margin-right: 5px;
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
