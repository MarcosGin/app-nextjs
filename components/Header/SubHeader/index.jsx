import React from "react";
import Transmission from "../Transmission";
import Search from "../Search";
import Follow from "../Follow";

function SubHeader(props) {
  const { transmission, socialLinks, search } = props;
  return (
    <div className="app-sub-header">
      <div className="container">
        <Transmission data={transmission} />
        <div className="app-search-follow-righ">
          {search && <Search />}
          <Follow socials={socialLinks} />
        </div>
      </div>
    </div>
  );
}

SubHeader.defaultProps = {
  search: true,
  transmission: {},
  socialLinks: []
};

export default SubHeader;
