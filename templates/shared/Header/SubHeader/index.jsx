import React from "react";
import Transmission from "../Transmission";
import Search from "../Search";
import Follow from "../Follow";

function SubHeader(props) {
  const { transmission, socialLinks } = props;
  return (
    <div className="app-sub-header">
      <div className="container">
        <Transmission data={transmission} />
        <div className="app-search-follow-righ">
          <Search />
          <Follow socials={socialLinks} />
        </div>
      </div>
    </div>
  );
}

export default SubHeader;
