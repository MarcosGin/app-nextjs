import React from "react";
import Link from "next/link";
import { Menu, Dropdown, Icon } from "antd";

//Todo: Render SubMenu items, maybe is better separate the dropdown item in another component
const Navigation = ({ items, limitItems, showDropdownMoreItems, dropdownMoreItems }) => {
  const onClick = ({ key }) => {};

  const renderItems = (items = []) =>
    items.map(item => (
      <Menu.Item key={item.link}>
        <Link href="/[section]" as={item.link}>
          <a>{item.text}</a>
        </Link>
      </Menu.Item>
    ));

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
          <Menu.Item key={dropdownMoreItems.key}>
            <Dropdown
              overlay={dropdownOverlay(moreItems)}
              trigger={["click"]}
              onVisibleChange={() => console.log("visible chage")}
            >
              <a>
                <Icon type="bars" /> {dropdownMoreItems.title}
              </a>
            </Dropdown>
          </Menu.Item>
        )}
      </Menu>
      {/* language=CSS*/}
      <style jsx>{`
        nav :global(.app-menu) {
          background: transparent;
          border-bottom-color: transparent;
          line-height: 26px;
        }
        nav :global(.app-menu) :global(.app-menu-item) {
          margin: 0 40px;
          padding: 0;
        }
        nav :global(.app-menu) :global(.app-menu-item):hover,
        nav :global(.app-menu) :global(.app-menu-item-selected) {
          border-bottom-color: #db0a40;
        }

        nav :global(.app-menu) :global(a) {
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
  limitItems: 4,
  showDropdownMoreItems: true,
  dropdownMoreItems: {
    key: "keyformoreitems",
    title: "More items"
  }
};

export default Navigation;
