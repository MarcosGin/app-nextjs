import React from "react";
import Menu from "./Menu";
import SubHeader from "./SubHeader";

class Header extends React.Component {
  render() {
    return (
      <div id="header">
        <div className="header_bar">
          <div className="header_wrapper">
            <header className="main_header">
              <Menu
                logo={{ url: this.props.logo, svg: this.props.svgLogo }}
                items={this.props.menu.items}
                socialLinks={this.props.subHeader.socialLinks}
              />
            </header>
            <SubHeader {...this.props.subHeader} />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
