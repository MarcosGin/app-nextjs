import React from "react";
import Link from "next/link";
import { Menu } from "antd";

const NavigationItem = ({ href, link, text, ...props }) => {
  return (
    <Menu.Item {...props}>
      <Link href={href} as={link}>
        <a>{text}</a>
      </Link>
    </Menu.Item>
  );
};

NavigationItem.defaultProps = {
  href: "",
  link: "",
  text: ""
};

export default NavigationItem;
