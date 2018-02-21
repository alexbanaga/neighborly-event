import React from 'react'
import './SpeakersBackground.scss';

const backgroundPath = '../../../../public/images/Speaker-bg.png';

const SpeakersBackground = () => {
    return (
        <div className="speakers-background">
                <img className="img-size" src={backgroundPath} />
        </div>
    )
}

export default SpeakersBackground;