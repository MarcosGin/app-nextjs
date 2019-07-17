import React from "react";
import Link from "next/link";

function Logo(props) {
  const { url, svg } = props;

  const renderLogo = () => {
    if (url) {
      return (
        <a className="telefe-logo" style={{ backgroundImage: `url(${url})` }}>
          <h2>Telefe</h2>
          {svg && svg}
        </a>
      );
    } else {
      return (
        <a className="telefe-logo default-logo">
          <h2>Telefe</h2>
        </a>
      );
    }
  };

  return <Link href="/">{renderLogo()}</Link>;
}

export default Logo;
