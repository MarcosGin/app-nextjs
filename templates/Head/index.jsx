import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

//Todo: Render metatags items
const PageHead = ({ title, metatags, links }) => {
  return (
    <Head>
      {title && <title>{title}</title>}
      {metatags.map((meta, key) => (
        <meta {...meta} key={key} />
      ))}
      {links.map((link, key) => (
        <link {...link} key={key} />
      ))}
    </Head>
  );
};

PageHead.propTypes = {
  title: PropTypes.string,
  metatags: PropTypes.array,
  links: PropTypes.array
};

PageHead.defaultProps = {
  title: "Default title",
  metatags: [],
  links: []
};
export default PageHead;
