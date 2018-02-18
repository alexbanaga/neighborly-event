import React from 'react';
import './SpeakerImg.scss';

const SpeakerImg = ({ speakerName, speakerPosition, speakerImgName }) => {
    return (
        <div className="speaker-container" >
        <img className="speaker-img-container" src={'../../../../public/images/' + speakerImgName}/>
            <div>
                <div className="speaker-text-container">
                    <div className="speaker-name-header">{speakerName}</div>
                    <div className="speaker-position-header">{speakerPosition}</div>
                </div>
            </div>
        </div>
    )
}

export default SpeakerImg;