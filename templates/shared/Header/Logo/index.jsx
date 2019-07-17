import React from "react";

function Logo(props) {
  const { url, svg } = props;
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
}

export default Logo;
