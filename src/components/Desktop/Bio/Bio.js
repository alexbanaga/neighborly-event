import React from 'react'
import './Bio.scss';
import { BIO } from '../../../configuration';

const Bio = () => {
    return (
        <div className="bio">
            <div className="bio-container">
                <div className="bio-text-container">
                    <div className="text-container">
                        <div className="bio-title">CONFERENCE</div>
                        <div className="bio-lower-title">
                            <div className="bio-title">BIO</div>
                            <div className="bio-title-line"></div>
                        </div>
                        <div className="bio-paragraph">
                            {BIO.bioText}
                        </div>
                        <a href="https://www.thebatterysf.com/hotel" target="_blank"><div className="bio-button">
                            <div className="bio-button-text">BOOK YOUR ROOM</div>
                        </div>
                        </a>
                    </div>
                </div>
                <div className="bio-img-container">
                    <div> <img className="bio-img" src="../../../public/images/bio-picture.png" /></div>
                    <div className="bio-address-container">
                        <div>
                            <img className="bio-address-location" src="../../../public/images/pin-location-large.svg" />
                        </div>
                        <div className="bio-address-text">
                        <div className="bio-text-highlight">The Battery </div><div> San Francisco, CA 94111</div>
                        </div>
                    </div>
                    <div className="bio-text-underline"> </div>

                </div>
            </div>

        </div>
    )
}

export default Bio;
