import React from "react";

const ChildrenOne = props => {
  return <div className="childrenOne">{props.title}</div>;
};

const ChildrenTwo = props => {
  return <div className="childrenTwo">{props.title}</div>;
};

const SubChildrenOne = props => {
  return <div className="SubChildrenOne">{props.title}</div>;
};

const components = { ChildrenOne, ChildrenTwo, SubChildrenOne };

class DynamicComponent extends React.Component {
  createElement = def => {
    return React.createElement(
      components[def.type],
      def.props,
      ((def.props || {}).children || []).map((c, index) => {
        c.props.key = index;
        return this.createElement(c);
      })
    );
  };

  renderComponent = () => this.createElement(this.props.root);

  render() {
    return <div className="Component">{this.renderComponent()}</div>;
  }
}

class Dynamic extends React.Component {
  static async getInitialProps() {
    const layoutJson = {
      type: "Page",
      props: {
        title: "ey",
        children: [
          {
            type: "ChildrenOne",
            props: { title: "title children" }
          },
          {
            type: "ChildrenTwo",
            props: {
              title: "title children two",
              children: [{ type: "SubChildrenOne", props: { title: "title subchildren one" } }]
            }
          }
        ]
      }
    };
    return {
      layoutJson
    };
  }

  render() {
    const { layoutJson } = this.props;
    return (
      <div className="container">
        {layoutJson.props.children.map((child, index) => {
          return <DynamicComponent root={child} key={index}></DynamicComponent>;
        })}
      </div>
    );
  }
}

export default Dynamic;
