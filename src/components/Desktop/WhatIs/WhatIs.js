import React from 'react'
import './WhatIs.scss';
import { SECOND_SECTION } from '../../../configuration';

const WhatIs = ({ }) => {
    return (
        <div className="what-is">
            <div className="what-is-container">
                <div className="what-is-text-container-first">
                    <div className="what-is-text-container">
                        <div className="what-is-header">{SECOND_SECTION.header}</div>
                        <div className="what-is-line"></div>
                        <div className="first-paragraph">
                            
                        </div>
                        <div className="line-seperator">{SECOND_SECTION.firstParagraph}</div>
                        <div className="second-paragraph">{SECOND_SECTION.secondParagraph}</div>
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