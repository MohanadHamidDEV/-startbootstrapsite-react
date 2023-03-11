import React, { Component } from 'react';
import styles from "./style.module.css";

class index extends Component {
    render() {
        return (
            <>

                <div className="py-5 container">

                    <div className={`container-fluid bg-light py-5 text-dark`}>
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <h2
                                className={`text-center ${styles.contactHeading}`}
                            >
                                PORTFOLIO
                            </h2>
                            <div className="w-100 d-flex align-items-center justify-content-center">
                                <div
                                    className={`bg-dark d-inline ${styles.hrDiv}`}
                                ></div>
                                <i className="fs-1 fa-solid fa-star"></i>
                                <div
                                    className={`bg-dark d-inline ${styles.hrDiv}`}
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="fullName" placeholder='Full name' required />
                                <label for="fullName">Full name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea type="email" className="form-control" id="email" placeholder="Email" required />
                                <label for="email">Email</label>
                            </div>
                            <div className="form-floating is-valid mb-3">
                                <textarea type="number" className="form-control" id="phoneNumber" placeholder="Phone number" size="4" required />
                                <label for="phoneNumber">Phone number</label>
                                <div class="invalid-feedback">
                                    Please enter a phone number.
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </>
        );
    }
}

export default index;