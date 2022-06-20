import React from "react";
// import { Outlet, Link } from 'react-router-dom';
import Button from "../../components/button/button.component";
import Footer from "../../components/footer/footer.component";
// import styles from "./home.module.css";
import styles from "../../components/button/button.module.css";

import "./../../style.css";

const Home = () => {
  return (
    <div className="page-container">
      <div className="section">
        <div className="row c2">
          <div className="col c1">
            <h1 className="title">
              CREATING WEBSITES THAT MAKE YOU STOP & STARE
            </h1>
            <p className="text">
              Accusantium quam, aliquam ultricies eget tempor id, aliquam eget
              nibh et. Maecen aliquam, risus at semper. Proin iaculis purus
              consequat sem cure digni ssim. Donec porttitora entum.
            </p>
            <Button className={styles.btn}>Get Started</Button>
          </div>
          <div className="col c2 t-center">
            <img src="images/recording-basic.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="section bg-accent-img">
        <div className="row wc1 mb50">
          <div className="col c1">
            <h1 className="title t-center">
              CREATING WEBSITES THAT MAKE YOU STOP & STARE
            </h1>
            <p className="text t-center">
              Accusantium quam, aliquam ultricies eget tempor id.
            </p>
          </div>
        </div>
        <div className="row wc3">
          <div className="col c1">
            <div className="blurb">
              <h4 className="number">232</h4>
              <p className="tiny text">Clients</p>
            </div>
          </div>
          <div className="col c2">
            <div className="blurb">
              <h4 className="number">521</h4>
              <p className="tiny text">Projects</p>
            </div>
          </div>
          <div className="col c3">
            <div className="blurb">
              <h4 className="number">1463</h4>
              <p className="tiny text">Hours Of Support</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
