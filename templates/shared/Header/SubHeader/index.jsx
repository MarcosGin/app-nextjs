import React from "react";
import Transmission from "../Transmission";
import Search from "../Search";
import Follow from "../Follow";

function SubHeader(props) {
  const { transmission, socialLinks } = props;
  return (
    <div className="sub_header">
      <div className="sub_header_container">
        <Transmission data={transmission} />

        <div className="b-main-menu-side-bar">
          <Search />
          <Follow socials={socialLinks} />
        </div>
      </div>
    </div>
  );
}

export default SubHeader;
