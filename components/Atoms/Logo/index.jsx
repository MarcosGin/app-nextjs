import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const Logo = ({ url, width, height, backgroundPosition, backgroundSize }) => {
  return (
    <div className="logo">
      <Link href="/">
        <a>
          <span />
        </a>
      </Link>

      <style jsx>{`
        .logo a{
          background-image: url('${url}');
          width: ${width};
          height:  ${height};
          background-position: ${backgroundPosition};
          background-size: ${backgroundSize};
          background-repeat: no-repeat;
          display: block;
        }
      `}</style>
    </div>
  );
};

Logo.propTypes = {
  url: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  backgroundPosition: PropTypes.string.isRequired,
  backgroundSize: PropTypes.string.isRequired
};

Logo.defaultProps = {
  url: "",
  width: "150px",
  height: "50px",
  backgroundPosition: "center",
  backgroundSize: "cover"
};

export default Logo;
