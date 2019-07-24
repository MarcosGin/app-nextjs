import React from "react";
import Link from "next/link";
import { Menu as MenuAntd, Dropdown, Icon } from "antd";
import { withRouter } from "next/router";

class Menu extends React.Component {
  state = {
    activeRoutes: []
  };

  constructor(props) {
    super(props);
    const { section } = this.props.router.query;

    if (section) {
      const activeRoute = this.props.items.find(item => item.link === `/${section}`);

      if (activeRoute) {
        this.state = { ...this.state, activeRoutes: [activeRoute.link] };
      }
    }
  }

  onClickItem = ({ key }) => {
    if (key === this.props.keyShowMoreItems) {
      return false;
    }
    this.setState({ activeRoutes: [key] });
  };

  showMoreVisible = flag => {
    if (flag) {
      this.setState({
        activeRoutes: [this.props.keyShowMoreItems],
        currentRoute: this.state.activeRoutes
      });
    } else {
      this.setState({ activeRoutes: this.state.currentRoute, currentRoute: null });
    }
  };

  showMoreItems = () => (
    <MenuAntd>
      <MenuAntd.Item>
        <a>Section</a>
      </MenuAntd.Item>
    </MenuAntd>
  );

  render() {
    const { activeRoutes } = this.state;
    return (
      <nav>
        <MenuAntd mode="horizontal" selectedKeys={activeRoutes} onClick={this.onClickItem}>
          {this.props.items.map(item => {
            return (
              <MenuAntd.Item key={item.link}>
                <Link href="/[section]" as={item.link}>
                  <a>{item.text}</a>
                </Link>
              </MenuAntd.Item>
            );
          })}
          <MenuAntd.Item key={this.props.keyShowMoreItems}>
            <Dropdown
              overlay={this.showMoreItems}
              trigger={["click"]}
              onVisibleChange={this.showMoreVisible}
            >
              <a>
                <Icon type="bars" /> Más secciones
              </a>
            </Dropdown>
          </MenuAntd.Item>
        </MenuAntd>
      </nav>
    );
  }
}

Menu.defaultProps = {
  keyShowMoreItems: "showMoreSections"
};

export default withRouter(Menu);
