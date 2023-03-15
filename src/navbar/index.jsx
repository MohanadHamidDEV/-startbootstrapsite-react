import { Component } from "react";
import { Link } from "react-router-dom";
import "./style..css";

export default class Index extends Component {
  render() {
    return (
      <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid px-0">
            <Link class="navbar-brand" to="/">
              START BOOTSTRAP
            </Link>
            <button
              class="navbar-toggler text-light fs-6 px-4"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fa-solid fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav ms-auto my-3">
                <Link
                  class="nav-link text-uppercase"
                  to="/portfolio"
                >
                  portfolio
                </Link>
                <Link class="nav-link text-uppercase" to="/about">
                  about
                </Link>
                <Link class="nav-link text-uppercase" to="/contact">
                  contact
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
