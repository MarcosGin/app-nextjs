import React from "react";
import { Layout } from "antd";
import Menu from "./Menu";
import SubHeader from "./SubHeader";
import Logo from "./Logo";

class Header extends React.Component {
  render() {
    return (
      <Layout.Header>
        <div className="container">
          <Logo url={this.props.logo} svg={this.props.svgLogo} />
          <Menu items={this.props.menu.items} socialLinks={this.props.subHeader.socialLinks} />
        </div>
      </Layout.Header>
    );
  }
}

export default Header;
