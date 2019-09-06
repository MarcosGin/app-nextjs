import React from "react";
import { Layout } from "antd";
import { withRouter } from "next/router";
import Menu from "./Menu";
import SubHeader from "./SubHeader";
import Logo from "./Logo";

class Header extends React.Component {
  render() {
    return (
      <>
        <Layout.Header>
          <div className="container">
            <Logo url={this.props.logo} svg={this.props.svgLogo} />
            <Menu items={this.props.menu} router={this.props.router} />
          </div>
        </Layout.Header>
        <SubHeader {...this.props.subHeader} />
      </>
    );
  }
}

export default withRouter(Header);
