import React, { useRef } from "react";
import { Carousel, Icon } from "antd";

const Slider = ({ items, settings }) => {
  let slider = useRef(null);

  const onClickNext = () => slider.next();
  const onClickPrev = () => slider.prev();

  return (
    <div className="container">
      <div className="slider">
        <div className="slider-buttons">
          <button className="left" onClick={onClickPrev}>
            <Icon type="left" />
          </button>
          <button className="right" onClick={onClickNext}>
            <Icon type="right" />
          </button>
        </div>
        <Carousel ref={c => (slider = c)} {...settings}>
          {items.map(item => (
            <div className="slider-item" key={item.id}>
              <img src={item.image} alt="asd" />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

Slider.defaultProps = {
  items: [],
  settings: {
    dots: false,
    autoplay: true,
    fade: true
  }
};
export default Slider;
