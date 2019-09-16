import React from "react";
import { Icon, Menu } from "antd";
import NavigationItem from "../Item";

const NavigationSubMenu = ({ items, link, text, ...props }) => {
  const title = (
    <span>
      <Icon type="down" /> {text}
    </span>
  );

  return (
    <Menu.SubMenu {...props} title={title} popupClassName="app-nav-submenu-popup">
      {items.map(item => (
        <NavigationItem href="/[section]" key={item.link} link={item.link} text={item.text} />
      ))}
    </Menu.SubMenu>
  );
};

export default NavigationSubMenu;
