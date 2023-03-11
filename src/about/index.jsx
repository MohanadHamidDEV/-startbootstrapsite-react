import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

export default class Index extends Component {
  render() {
    return (
      <>
        <div
          className={`overflow-scroll py-5 bg-light text-light vh-100 ${styles.about}`}
        >
          <div
            className={`fs-4 d-flex flex-column align-items-center justify-content-start pb-5`}
          >
            <h2 className={`${styles.pfolioHeading}`}>ABOUT</h2>
            <div className="d-flex align-items-center justify-content-center">
              <div className={`d-inline bg-light ${styles.hrDiv}`}></div>
              <i class="fa-solid fa-star fs-1"></i>
              <div className={`d-inline bg-light ${styles.hrDiv}`}></div>
            </div>
          </div>

          <div className="abt-container fs-5 g-4 px-5 row col-12 g-2 text-lg-start text-sm-center">
            <div className="col-lg-6 col-md-12">
              <p className="h-100">
                Freelancer is a free bootstrap theme created by Start Bootstrap.
                The download includes the complete source files including HTML,
                CSS, and JavaScript as well as optional SASS stylesheets for
                easy customization.
              </p>
            </div>
            <div className="col-lg-6 col-md-12">
              <p className="h-100">
                You can create your own custom avatar for the masthead, change
                the icon in the dividers, and add your email address to the
                contact form to make it fully functional!
              </p>
            </div>
            <div className="col-12 text-center">
              <Link className="px-5 py-3 btn btn-outline-light" to="/">
                Free Download!
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}
