import React from "react";
import Footer from "../../components/footer-component/footer.component";

import "./../../style.css";

const Home = () => {
  return (
    <div className="page-container">
      <div className="section bg-accent-img home-hero-section">
        <div className="row c2">
          <div className="col c1">
            <h1 className="title">Your voice helps new technologies!</h1>
            <h3 className="text"> Play your voice.</h3>
          </div>
        </div>
        <div className="row wc1 mb50">
          <div className="col c1">
            <h2 className="title t-center">
              Creating Websites that make technology grow
            </h2>
          </div>
        </div>
        <div className="row wc3">
          <div className="col c1">
            <div className="blurb">
              <h4 className="number">20</h4>
              <p className="tiny text">Days Of Research</p>
            </div>
          </div>
          <div className="col c2">
            <div className="blurb">
              <h4 className="number">4</h4>
              <p className="tiny text">Similar Projects</p>
            </div>
          </div>
          <div className="col c3">
            <div className="blurb">
              <h4 className="number">360</h4>
              <p className="tiny text">Hours Of Implementation</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
