import React from 'react'
import './MobileWhatIs.scss';
import {SECOND_SECTION} from '../../../configuration';

const MobileWhatIs = ({ }) => {
    return (
        <div className="what-is-mobile">
            <div className="what-is-container">
                <div className="what-is-text-container-first">
                        <div className="what-is-header">{SECOND_SECTION.header}</div>
                        <div className="what-is-line"></div>
                        <div className="first-paragraph">
                            {SECOND_SECTION.firstParagraph}
                        </div>
                        <div className="line-seperator"></div>
                        <div className="second-paragraph">{SECOND_SECTION.secondParagraph}</div>
                    </div>
                    <img className="img" src={require('../../../public/images/CityOfMobile.svg')} />
            </div>
        </div>
    )
}

export default MobileWhatIs;