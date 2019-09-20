import React from "react";

const Card = ({ title, thumbnail }) => {
  return (
    <div className="card">
      <div className="thumbnail">
        <div className="date">
          <img src={thumbnail} alt={title} />
        </div>
      </div>
      <div className="content">
        <div className="category">category</div>
        <h1 className="title" />
        <h2 className="sub-title" />
        <p className="description" />
        <div className="information"></div>
      </div>
      {/*language=CSS*/}
      <style jsx>{`
        .card {
          background: #fff;
          box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
          width: 270px;
        }
      `}</style>
    </div>
  );
};

Card.defaultProps = {
  title: "",
  description: "",
  thumbnail: "",
  url: "",
  date: ""
};

export default Card;
