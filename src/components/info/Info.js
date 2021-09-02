import React, { Component } from 'react';
import './Info.css';

class Info extends Component{
    state = {};

    render() {
        return (
            <div className="info-wrapper">
                <p className="info-wrapper__text">Allbridge is a simple, modern,
                    and reliable way to transfer assets between networks. It's a
                    decentralized, modular, and expanding token bridge with on-chain consensus.
                    <span className="info-wrapper__span">
                        Transfer ERC20, SPL, and many more tokens in a few clicks.
                    </span>
                </p>
            </div>
        )
    }
};
export default Info;