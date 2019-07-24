import React from "react";
import Link from "next/link";

function Logo(props) {
  const { url, svg } = props;

  const renderLogo = () => {
    if (url) {
      return <a style={{ backgroundImage: `url(${url})` }} />;
    } else {
      return (
        <a>
          <h2>Telefe Logo</h2>
        </a>
      );
    }
  };

  return (
    <div className="logo">
      <Link href="/">{renderLogo()}</Link>
    </div>
  );
}

export default Logo;
