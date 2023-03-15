import React, { Component } from "react";
import pfp from "../assets/img/avataaars.svg";
import styles from "./style.module.css";

export default class Index extends Component {
  render() {
    return (
      <>
        <section className={`${styles.header} d-flex flex-column align-items-center pt-5 vh-100 overflow-scroll`}>

          <div className="w-100">

            <div className="d-flex flex-column align-items-center text-light text-nowrap">
              <img className="pb-4" src={pfp} width="250px" alt="pfp" />
              <h2 className="text-uppercase fs-1 fw-bold">Start Bootstrap</h2>

              <div className={`${styles.hrParent} py-3 w-75`}>
                <div className={`bg-light ${styles.hrDiv}`}></div>
                <i class="fa-solid fa-star fs-1 px-2"></i>
                <div className={`bg-light ${styles.hrDiv}`}></div>
              </div>

              <h3 className={`${styles.desc} text-capitalize text-nowrap`}>Gaphic Artist - Web Designer - Illustrator</h3>
            </div>

          </div>
        </section>
      </>
    );
  }
}
