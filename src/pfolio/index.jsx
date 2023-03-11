import React, { Component } from "react";
import styles from "./style.module.css";
import cabin from "../assets/img/cabin.png";
import cake from "../assets/img/cake.png";
import circus from "../assets/img/circus.png";
import game from "../assets/img/game.png";
import safe from "../assets/img/safe.png";
import submarine from "../assets/img/submarine.png";

export default class Index extends Component {
  render() {
    return (
      <>
        <div className={`container-fluid bg-light py-5 text-dark`}>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <h2
              className={`text-center ${styles.pfolioHeading}`}
            >
              PORTFOLIO
            </h2>
            <div className="w-100 d-flex align-items-center justify-content-center">
              <div
                className={`bg-dark d-inline ${styles.hrDiv}`}
              ></div>
              <i className="fs-2 fa-solid fa-star"></i>
              <div
                className={`bg-dark d-inline ${styles.hrDiv}`}
              ></div>
            </div>
          </div>

          <div className="h-100 row text-center justify-content-around g-4 mt-2">
            <div className="d-flex justify-content-center col-lg-4 col-md-6 col-sm-12">
              <div className="card w-100">
                <img className="w-100 rounded-2" src={cabin} alt="cabin" />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card">
                <img className="rounded-2" src={cake} alt="cake" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card">
                <img className="rounded-2" src={circus} alt="circus" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card">
                <img className="rounded-2" src={game} alt="game" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card">
                <img className="rounded-2" src={safe} alt="safe" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card">
                <img className="rounded-2" src={submarine} alt="submarine" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
