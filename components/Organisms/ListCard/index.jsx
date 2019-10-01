import React from "react";
import Card from "@Components/Molecules/Card";

const ListCard = ({ items }) => {
  return (
    <section>
      <div className="container">
        <div className="list-card">
          {items.map(item => (
            <Card {...item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

ListCard.defaultProps = {
  items: []
};

export default ListCard;
