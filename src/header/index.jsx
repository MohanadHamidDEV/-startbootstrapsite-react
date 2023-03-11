import React, { Component } from "react";
import pfp from "../assets/img/avataaars.svg";
import styles from "./style.module.css";

export default class Index extends Component {
  render() {
    return (
      <>
        <section
          className={`${styles.header} min-vh-100 pb-5 text-center d-flex align-items-center justify-content-center flex-column`}
        >
          <div>
            <img src={pfp} className="pb-5" alt="profile" width="250" />
          </div>
          <div>
            <div>
              <h2 className={`fw-bold text-light ${styles.headerTitle}`}>
                START BOOTSTRAP
              </h2>
            </div>

            <div className={`pb-5 pt-4 ${styles.hrParent}`}>
              <div className={`d-inline ${styles.hrDiv}`}></div>
              <i class="fa-solid fa-star text-light fs-1"></i>
              <div className={`d-inline ${styles.hrDiv}`}></div>
            </div>

            <div className="fw-semibold text-light fs-5">
              <p>Graphic Artist - Web Designer - Illustrator</p>
            </div>
          </div>
        </section>
      </>
    );
  }
}
