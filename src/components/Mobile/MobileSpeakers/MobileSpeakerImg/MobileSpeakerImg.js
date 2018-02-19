import React from 'react';
import PropTypes from 'prop-types';
import './MobileSpeakerImg.scss';

const MobileSpeakerImg = ({ speakerName, speakerPosition, speakerImgName }) => {
    return (
        <div className="mobile-speaker-container" >
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


MobileSpeakerImg.propTypes = {
    speakerName: PropTypes.string.isRequired,
    speakerPosition: PropTypes.string.isRequired,
    speakerImgName: PropTypes.string.isRequired
};

export default MobileSpeakerImg;