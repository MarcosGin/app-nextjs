import React from "react";
import Router, { withRouter } from "next/router";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";

import BaseLayout from "../../templates/layouts/BaseLayout";

class Post extends React.Component {
  static async getInitialProps({ query }) {
    const { section, post } = query;
    const postResponse = await axios.get(`http://localhost:3000/api/${section}/${post}`);

    return { ...postResponse.data };
  }

  constructor(props) {
    super(props);
    this.state = {
      showPosts: [props.post],
      showMorePost: true
    };
  }

  setActive = page => {
    Router.push("/[section]/[post]", "/politica/" + page, { shallow: true });
  };

  showMorePosts = async () => {
    if (this.props.scrollablePost.length) {
      const nextPost = this.props.scrollablePost[0];
      const { section } = this.props.router.query;
      const res = await axios.get(`http://localhost:3000/api/${section}/${nextPost.slug}`);
      this.setState({ showPosts: [...this.state.showPosts, res.data.post] });
      this.setActive(nextPost.slug); // this need yo change when the post is close to the top
    } else {
      this.setState({ showMorePost: false });
    }

    this.props.scrollablePost.shift(); // clean the first;
  };

  render() {
    const { showPosts, showMorePost } = this.state;
    return (
      <BaseLayout {...this.props}>
        <InfiniteScroll loadMore={this.showMorePosts} hasMore={showMorePost}>
          <div className="posts">
            {showPosts.map((post, key) => {
              return (
                <div className="post" key={key} style={{ height: "1300px" }}>
                  <div className="wrapper wrapper_post m-push-sidebar">
                    <article className="b-post">
                      <div className="row">
                        <div className="small-12">
                          <img src={post.thumbnail} style={{ width: "100%" }} />
                        </div>
                        <div className="small-12 xlarge-8 xlarge-offset-2 large-8 large-offset-2 columns" />
                        <div className="small-12 medium-12 large-2 xlarge-2 large-offset-2 xlarge-offset-2 columns" />
                        <div className="small-12 medium-12 large-6 columns " />
                      </div>
                    </article>
                  </div>
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </BaseLayout>
    );
  }
}

export default withRouter(Post);
