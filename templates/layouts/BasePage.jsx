import React from "react";
import Head from "next/head";
import DynamicComponent from "../../components/DynamicComponent";

class BasePage extends React.Component {
  renderHead = (head = {}) => {
    return <Head>{head.title && <title>{head.title}</title>}</Head>;
  };

  render() {
    const { props = {}, children: childrenFromPage = [] } = this.props.page;
    return (
      <>
        {this.renderHead(props.head)}

        <div className="page">
          {childrenFromPage.map((child, index) => {
            return <DynamicComponent element={child} key={index} />;
          })}
          {this.props.children}
        </div>
      </>
    );
  }
}

export default BasePage;
