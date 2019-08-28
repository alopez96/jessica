import React, { useState } from 'react';
import './../App.css';

function Hero() {

    const contractClick = () => {
        console.log('contract clicked')
    }

    return(
        <div className="hero">
            <div>
                <h1 className="heading">We offer great welding</h1>
                <h1 className="sub-heading">Best in town</h1>
            </div>
            <div>
                <button className="primary-btn" onClick={()=> contractClick() }>Contract</button>
            </div>
        </div>
    )
}


export default Hero;