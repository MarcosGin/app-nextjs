import React from "react";
import components from "../index";

class DynamicComponent extends React.Component {
  createElement = ({ type, props, children = [], container = {} }) => {
    const element = React.createElement(
      components[type],
      props,
      children ? this.createChildren(children) : []
    );

    if (container && container.element) {
      const props = {};
      if (container.classNames) props.className = container.classNames;

      const containerElement = React.createElement(container.element, props, element);
      return containerElement;
    }

    return element;
  };

  createChildren = children =>
    children.map((child, index) => {
      child.props.key = index;
      return this.createElement(child);
    });

  render() {
    return this.createElement(this.props.element);
  }
}

export default DynamicComponent;
