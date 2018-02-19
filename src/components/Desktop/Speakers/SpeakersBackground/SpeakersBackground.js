import React from 'react'
import './SpeakersBackground.scss';

const backgroundPath = '../../../../public/images/speakers-background.svg';

const SpeakersBackground = () => {
    return (
        <div className="speakers-background">
            <img className="img-size" src={backgroundPath} />
            <div className="speakers-bg-top-right">
                <img className="img-size" src={backgroundPath} />
            </div>
        </div>
    )
}

export default SpeakersBackground;