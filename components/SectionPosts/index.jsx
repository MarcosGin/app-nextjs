import React from "react";
import Card from "../Card";

class SectionPosts extends React.Component {
  renderPostCards() {
    return this.props.posts.map((post, key) => {
      return (
        <div key={key} className="small-12 medium-6 large-4 xlarge-4 columns">
          <Card data={post} />
        </div>
      );
    });
  }

  render() {
    const { title } = this.props;

    return (
      <div className="wrapper wrapper_section">
        <div className="b-section">
          <div className="b-section-title">
            <h1>
              <span>{title}</span>
            </h1>
          </div>
          <div className="row">{this.renderPostCards()}</div>
        </div>
      </div>
    );
  }
}

export default SectionPosts;
