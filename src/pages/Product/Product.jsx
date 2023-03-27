import React from "react";
import Wrapper from "../../UI/Wrapper";
import Grid from "../../UI/Grid";
import styles from "./Product.module.css";
import ProductImageSlider from "./ProductImageSlider";
import ProductDescription from "./ProductDescription";
import ProductOwner from "./ProductOwner";
import SimilarProducts from "./SimilarProducts";

const Product = () => {
  return (
    <>
      <Wrapper>
        <div className={styles.productContainer}>
          <Grid
            gridColumns={"repeat(auto-fit, minmax(350px, 1fr))"}
            columnGap={20}
            justifyContent={"space-between"}
          >
            <div>
              <p>Home / Explore / Science / Working well</p>
              <ProductImageSlider />
              <ProductDescription />
            </div>
            <ProductOwner />
          </Grid>
        </div>
      </Wrapper>
      <SimilarProducts />
    </>
  );
};

export default Product;
