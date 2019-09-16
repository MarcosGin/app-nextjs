import React from "react";
import { Icon, Menu, Dropdown } from "antd";

//Todo: change icon when is up or down the dropdown.
const NavigationDropdown = ({ title, overlay, triggers, onVisibleChange, showIcon, ...props }) => {
  return (
    <Menu.Item {...props}>
      <Dropdown
        overlay={overlay}
        trigger={triggers}
        onVisibleChange={onVisibleChange}
        overlayClassName="app-nav-dropdown"
      >
        <a className="app-dropdown-link">
          {showIcon && <Icon type="down" />}
          {title}
        </a>
      </Dropdown>
      {/* language=CSS*/}
      <style jsx>
        {`
          :global(.app-dropdown-trigger) > :global(.anticon.anticon-down),
          :global(.app-dropdown-link) > :global(.anticon.anticon-down) {
            transform: none;
          }
        `}
      </style>
    </Menu.Item>
  );
};

NavigationDropdown.defaultProps = {
  title: "",
  showIcon: false
};

export default NavigationDropdown;
