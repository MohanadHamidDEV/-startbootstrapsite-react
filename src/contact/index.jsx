import React, { Component } from 'react';
import styles from "./style.module.css";

class index extends Component {
    render() {
        return (
            <>

                <div className="py-5 px-5 container-fluid">

                    <div className={`py-5 text-dark`}>
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <h2
                                className={`text-center fw-bold ${styles.contactHeading}`}
                            >
                                contact
                            </h2>
                            <div className="w-100 d-flex align-items-center justify-content-center">
                                <div
                                    className={`bg-dark d-inline ${styles.hrDiv}`}
                                ></div>
                                <i className="fs-1 fa-solid fa-star px-2"></i>
                                <div
                                    className={`bg-dark d-inline ${styles.hrDiv}`}
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <form>

                            <div className="row">
                                <div className="form-floating mb-3 col-lg-6 col-md-6 pe-2">
                                    <input type="text" name="fullName" className="form-control" id="fullName" placeholder='Full name' required />
                                    <label for="fullName">Full name</label>
                                </div>


                                <div className="form-floating mb-3 col-lg-6 col-md-6">
                                    <input type="tel" name="phoneNumber" className="form-control" id="phoneNumber" placeholder="Phone number" required />
                                    <label for="phoneNumber">Phone number</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="email" name="email" className="form-control" id="email" placeholder="Email" required />
                                    <label for="email">Email</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <textarea type="text" name="message" className="form-control" id="message" placeholder="Message" required />
                                    <label for="message">Message</label>
                                </div>

                                <div><button type="button" class="btn btn-success px-5 py-3">Send</button></div>
                            </div>
                        </form>
                    </div>

                </div>
            </>
        );
    }
}

export default index;