import React from "react";
import { Icon, Menu, Dropdown } from "antd";

//Todo: change icon when is up or down the dropdown.
const NavigationDropdown = ({ title, overlay, triggers, onVisibleChange, ...props }) => {
  return (
    <Menu.Item {...props}>
      <Dropdown overlay={overlay} trigger={triggers} onVisibleChange={onVisibleChange}>
        <a>
          <Icon type="down" /> {title}
        </a>
      </Dropdown>
      {/* language=CSS*/}
      <style jsx>
        {`
          a :global(.anticon) {
            margin: 0;
          }
        `}
      </style>
    </Menu.Item>
  );
};

NavigationDropdown.defaultProps = {
  title: ""
};

export default NavigationDropdown;
