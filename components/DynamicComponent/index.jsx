import React from "react";
import components from "../index";

class DynamicComponent extends React.Component {
  createElement = ({ type, props, children = [], container = {} }) => {
    const component = components[type];
    if (!component) return null; // Component not found

    const element = React.createElement(
      component,
      props,
      children ? this.createChildren(children) : []
    );

    const { element: elemContainer, classNames } = container;
    if (elemContainer) {
      const props = {};
      if (classNames) props.className = classNames;

      const fatherElement = React.createElement(elemContainer, props, element);
      return fatherElement;
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
