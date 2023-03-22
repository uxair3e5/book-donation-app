import React from "react";
import ScrollButton from "../../UI/ScrollButton";
import productImage from "../../assets/product-image.png";
import styles from "./ProductImageSlider.module.css";

const ProductImageSlider = () => {
  return (
    <div className={styles.imageContainer}>
      <img className={styles.image} src={productImage} alt="" />
      <div className={styles.scrollButtonContainer}>
        <ScrollButton arrowDirection={"left"} />
        <ScrollButton />
      </div>
    </div>
  );
};

export default ProductImageSlider;
