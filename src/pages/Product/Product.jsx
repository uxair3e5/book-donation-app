import React from "react";
import Wrapper from "../../UI/Wrapper";
import Grid from "../../UI/Grid";
import styles from "./Product.module.css";
import ProductImageSlider from "./ProductImageSlider";
import ProductDescription from "./ProductDescription";

const Product = () => {
  return (
    <Wrapper>
      <div className={styles.productContainer}>
        <Grid gridColumns={"55% 35%"} columnGap={20} justifyContent={"center"}>
          <div>
            <p>Home / Explore / Science / Working well</p>
            <ProductImageSlider />
            <ProductDescription />
          </div>
        </Grid>
      </div>
    </Wrapper>
  );
};

export default Product;
