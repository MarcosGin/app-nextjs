import React from "react";
import Card from "@Components/Molecules/Card";

const ListCard = ({ items }) => {
  return (
    <section>
      <div className="container">
        {items.map(item => (
          <Card {...item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

ListCard.defaultProps = {
  items: []
};

export default ListCard;
