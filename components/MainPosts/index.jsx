import React from "react";
import Card from "../Card";

class MainPosts extends React.Component {
  renderHeroCard() {
    return this.props.posts.hero.map((post, key) => {
      return (
        <div key={key} className="small-12 medium-12 large-6 columns b-home-news-top-hero">
          <Card data={post} type="hero" />
        </div>
      );
    });
  }

  renderHighlightCard() {
    return this.props.posts.highlights.top.map((post, key) => {
      return (
        <div key={key} className="small-12 medium-12 large-6 columns b-home-news-top-highlights">
          <Card data={post} type="highlight" />
        </div>
      );
    });
  }

  renderStandardCard() {
    return this.props.posts.highlights.bottom.map((post, key) => {
      return (
        <div key={key} className="small-12 medium-6 large-4 xlarge-4 columns">
          <Card data={post} />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="wrapper stretch m-push-sidebar">
        <section className="b-home-news-top">
          <div className="row">
            {this.renderHeroCard()}
            {this.renderHighlightCard()}
            {this.renderStandardCard()}
          </div>
        </section>
      </div>
    );
  }
}

export default MainPosts;
