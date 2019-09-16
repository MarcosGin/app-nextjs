import React from "react";
import { Icon, Menu } from "antd";
import { renderItems } from "../";
import Link from "next/link";

const NavigationSubMenu = ({ items, link, href, text, showIcon, ...props }) => {
  const title = (
    <span>
      <Link href={href} as={link}>
        <a>
          {showIcon && <Icon type="down" />}
          {text}
        </a>
      </Link>
    </span>
  );

  return (
    <Menu.SubMenu {...props} title={title} popupClassName="app-nav-submenu-popup">
      {renderItems(items)}
    </Menu.SubMenu>
  );
};

NavigationSubMenu.defaultProps = {
  items: [],
  link: "",
  text: "",
  showIcon: false
};

export default NavigationSubMenu;
