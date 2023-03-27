import React from "react";
import Grid from "../../UI/Grid";
import Button from "../../UI/Button";
import styles from "./ProductOwner.module.css";
import userImage from "../../assets/user-circle.png";
import map from "../../assets/map.png";

const ProductOwner = () => {
  return (
    <div className={styles.ownerDetail}>
      <Grid gridColumns={"auto 3fr"} flow={"columns"}>
        <div className={styles.avatar}>
          <img src={userImage} alt="" />
        </div>
        <div className={styles.userName}>
          <h4>Tania Mirza</h4>
          <p>6 others for donation</p>
        </div>
      </Grid>

      <hr />

      <h4>Location</h4>
      <p>F/7 Islamabad, Pakistan</p>
      <div className={styles.userLocation}>
        <img src={map} alt="" />
        <div className={styles.mapPin}>
          <div className={styles.pin}></div>
        </div>
      </div>
      <Button holder={"Contact Donor"} btnHeight={"40px"} btnWidth={"100%"} />
    </div>
  );
};

export default ProductOwner;
