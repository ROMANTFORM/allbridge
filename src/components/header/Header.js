import React, { Component } from 'react';
import './Header.css';

class Header extends Component{
    state = {};

    render() {
        return (
            <div className="Main-wrapper">
                <div className="Header">
                    <div className="Logo-link">
                        <button className="logo-btn"><span className="First-text">all</span>
                        <span className="Second-text">bridge</span>
                        <br/>
                    <span className="Other-text">by APYSwap Foundation</span></button>
                    
                </div>
                <button className="Header-btn">transfer assets</button>
                </div>
                
            </div>
            
        )
    }
};

export default Header;