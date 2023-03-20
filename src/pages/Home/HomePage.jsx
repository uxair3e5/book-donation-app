import React from "react";
import CallToAction from "../../layout/CallToAction";
import Banner from "./Banner";
import Categories from "./Categories/Categories";
import FeaturedBooks from "./FeaturedBooks";
import styles from "./HomePage.module.css";
import Testimonials from "./Testimonial/Testimonials";

const HomePage = () => {
  return (
    <div className={styles.homepageStyle}>
      <Banner />
      <FeaturedBooks />
      <Categories />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default HomePage;
