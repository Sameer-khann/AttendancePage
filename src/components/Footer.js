import React from 'react'
import insta from '../img/insta (1).png'
import fb from '../img/facebook (1).png'
import tiwtter from '../img/tiwtter (1).png'

export default function Footer() {
    return (
        <>
            <div className="footerSec">


                <div className="logoSecFoot">
                    <h1>CollegeEazy</h1>
                    <div className="socialMedia">
                        <img src={insta} alt="" />
                        <img src={fb} alt="" />
                        <img src={tiwtter} alt="" />
                    </div>
                </div>

                <div className="supportSecFoot">
                    <h1>Support</h1>
                    <h5>Notes</h5>
                    <h5>Attendance</h5>
                    <h5>ShopEazy</h5>
                    <h5>About Us</h5>
                </div>

                <div className="ContactUsFoot">
                    <h2>Contact us</h2>
                    <div className="phone">
                        <h4>Phone :</h4>
                        <h6> +91 78348 38443</h6>
                    </div>
                    <div className="email">
                        <h4>E mail :</h4>
                        <h6>collegeeazy@gmail.com</h6>
                    </div>
                    <div className="add">
                        <h4>Address: </h4>
                        <h6>FC-26, Panduk Shila Marg, Zero Pusta Rd, Shastri Park, Shahdara, New Delhi, Delhi 110053</h6>
                    </div>

                </div>


            </div>
            <div className="copyright">
                <p>All rights Copyright &copy; collegeazy.com</p>
            </div>

        </>
    )
}
