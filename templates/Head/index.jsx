import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Link from "@Components/Atoms/Link";

//Todo: Render metatags items
const PageHead = ({ title, metatags, links }) => {
  return (
    <Head>
      {title && <title>{title}</title>}
      {links.map(link => (
        <Link {...link} />
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
