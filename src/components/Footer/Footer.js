import React from 'react'

import footIcon from './img/foot-icon-op.jpg'
import './footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-head">
                    <div className="foot-head col">
                        <img src={footIcon} alt="" />
                        <div className="foot-contact">
                            <span className="text">Need help? contact us at</span>
                            <div className="foot-mail">
                                <h2>info@fclass.co</h2>
                            </div>
                        </div>

                    </div>
                    <div className="social-icons">
                        <div className="social yt"><i className="fab fa-youtube"></i></div>
                        <div className="social insta"><i className="fab fa-instagram"></i></div>
                        <div className="social fb"><i className="fab fa-facebook"></i></div>
                    </div>
                </div> 
                <div className="footer-body">
                    <div className="copy">&copy 2021 All Rights Reserved.</div>
                    <span>Terms&Conditions</span>
                    <span>Privacy policy</span>
                    <span>Blog</span>
                    <span>Contact us</span>
                </div>
            </div>
        </div>
    )
}

export default Footer
