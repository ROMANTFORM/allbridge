import React, { Component } from 'react';
import './Main.css';

class Main extends Component{
    state = {};

    render() {
        return (
            <div className="wrapper">
                <div className="Text-wrapper">
                    <p className="Text"> Easily transfer tokens and coins between 
                        <span className="Text-span"> various blockchains</span>
                    </p>
                </div>
                <div className="Cards-wrapper">
                    <div className="Card1 Card"></div>
                    <div className="Card2 Card"></div>
                    <div className="Card3 Card"></div>
                    <div className="Card4 Card"></div>
                    <div className="Card5 Card"></div>
                </div>
            </div>
        )
    }
};
export default Main;