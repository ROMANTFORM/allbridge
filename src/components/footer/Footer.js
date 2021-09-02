import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component{

    render() {
        return (
            <div className="footer-wrapper">
                <div className="btn-wrapper">
                    <button className="btn-wrapper__button">Disclaimer</button>
                    <button className="btn-wrapper__button">Privacy And GDPR Policy</button>
                    <button className="btn-wrapper__button">Terms And Conditions</button>
                    <button className="btn-wrapper__button">Cookies Policy</button>
                </div>
                <div className="icon-wrapper">
                    <div className="icon1 icon"></div>
                    <div className="icon2 icon"></div>
                    <div className="icon3 icon"></div>
                    <div className="icon4 icon"></div>
                    <div className="icon5 icon"></div>
                </div>
                <p>info@allbridge.io</p>
                <p>Copyright © 2021 All rights reserved. Allbridge</p>

            </div>
        )
    }
};
export default Footer;