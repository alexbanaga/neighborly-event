import React from 'react'
import './WhatIs.scss';

const WhatIs = ({ }) => {
    return (
        <div className="what-is">
            <div className="what-is-container">
                <div className="what-is-text-container-first">
                    <div className="what-is-text-container">
                        <div className="what-is-header">WHAT IS TFPF?</div>
                        <div className="what-is-line"></div>
                        <div className="first-paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit urabitur eleifend ante ac vestibulum mollis diam orci.
                        </div>
                        <div className="line-seperator"></div>
                        <div className="second-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit urabitur eleifend ante ac vestibulum mollis diam orci.</div>
                    </div>
                </div>
                <div className="what-is-img">
                    <img className="img" src={require('../../../public/images/CityOfMobile.svg')} />
                </div>
            </div>
        </div>
    )
}

export default WhatIs;