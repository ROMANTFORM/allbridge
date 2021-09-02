import React, { Component } from 'react';
import './Awards.css';
import img1 from '../../img/HAPI_Prize.png';
import img2 from '../../img/Velas_Prize.png';

class Awards extends Component{
    state = {};

    render() {
        return (
            <div className="awards-wrapper">
                <div className="title-wrap">
                   <h3 className="awards-title">Our awards</h3>
                <p className="awards-text">Solana Season Hackathon</p> 
                </div>
                
                <div className="awards-container">
                    <div className="our-awards award1">
                        <img src={img1} className="awards-img" />
                        <p className="img-text">HAPI Prize</p>
                    </div>
                    <div className="our-awards award2">
                        <img src={img2} className="awards-img" />
                        <p className="img-text">Velas Prize</p>
                    </div>
                </div>
            </div>
        )
    }
};
export default Awards;