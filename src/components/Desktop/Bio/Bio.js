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
                        <div className="bio-button">
                            <div className="bio-button-text">BOOK YOUR ROOM</div>
                        </div>
                    </div>
                </div>
                <div className="bio-img-container">
                    asasdasd
                </div>
            </div>

        </div>
    )
}

export default Bio;