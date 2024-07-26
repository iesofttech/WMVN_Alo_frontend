import React from "react";
import styles from "./Carousel.module.css";
import CustomCarousel from "../../helpers/helperComponents/CustomCarousel";

const Carousel = (props) => {
  const { banners } = props;
  return (
    <div style={{ marginTop: "10px" }} className={styles.carouselWrapper}>
      <div className={styles.paddingWrapper}>
        <CustomCarousel data={banners} autoplay={true} infinite={true} />
      </div>
    </div>
  );
};

export default Carousel;
