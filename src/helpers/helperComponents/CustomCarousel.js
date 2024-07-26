import { Carousel } from "antd";
import React from "react";

const CustomCarousel = ({ data, autoplay = false, infinite = false }) => {
  return (
    <Carousel autoplay={autoplay} infinite={infinite}>
      {data &&
        data.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`img${index + 1}`} className="imgStyle" />
          </div>
        ))}
    </Carousel>
  );
};

export default CustomCarousel;
