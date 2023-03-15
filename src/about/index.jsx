import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from "./style.module.css";

class Index extends Component {
    render() {
        return (
            <>
                <div className={`${styles.about} vh-100 overflow-scroll d-flex justify-content-center pt-5`}>
                    <div className='container text-light'>

                        <div className='d-flex flex-column align-items-center justify-content-center'>
                            <h2 className='text-uppercase fw-bold fs-1'>about</h2>

                            <div className={`${styles.hrParent} w-50 py-2`}>
                                <div className={`${styles.hrDiv} bg-light`}></div>
                                <i class="fa-solid fa-star fs-1 px-2"></i>
                                <div className={`${styles.hrDiv} bg-light`}></div>
                            </div>
                        </div>

                        <div className='row py-5 px-5'>
                            <div className='col-lg-6 pb-4 pe-lg-4'><p>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
                            <div className='col-lg-6 pb-4 ps-lg-4'><p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p></div>
                        </div>

                        <div className='w-100 pb-5 text-center'>
                            <button className='btn btn-outline-light text-capitalize px-5 py-4'><i class="fa-solid fa-download pe-2"></i>free download</button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Index;