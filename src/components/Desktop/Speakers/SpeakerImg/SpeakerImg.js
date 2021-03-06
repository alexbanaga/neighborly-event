import React from 'react';
import PropTypes from 'prop-types';
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


SpeakerImg.propTypes = {
    speakerName: PropTypes.string.isRequired,
    speakerPosition: PropTypes.string.isRequired,
    speakerImgName: PropTypes.string.isRequired
};

export default SpeakerImg;