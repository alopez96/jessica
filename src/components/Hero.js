import React, { useState } from 'react';
import './../App.scss';

function Hero() {

    const contractClick = () => {
        console.log('contract clicked')
    }

    return(
        <div className="hero">
            <div>
                <h1 className="heading">Jessica's Welding</h1>
                <h1 className="sub-heading">
                    With 10 years of experience,
                    you are in good hands</h1>
            </div>
            <div>
                <button className="primary-btn" onClick={()=> contractClick()}>Contract</button>
            </div>
        </div>
    )
}


export default Hero;