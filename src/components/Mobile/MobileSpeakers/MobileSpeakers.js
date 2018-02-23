import React from 'react'
import './MobileSpeakers.scss';
import MobileSpeakerImg from './MobileSpeakerImg/MobileSpeakerImg';
import { SPEAKERS } from '../../../configuration';

const MobileSpeakers = () => {
    return (
        <div className="mobile-speakers">
            <div className="speakers-container">
                <div className="speakers-text-container">
                    <div className="speakers-header">SPEAKERS</div>
                    <div className="speakers-underline"></div>
                    <div className="speakers-coming-soon">More speakers coming soon...</div>
                </div>
                <div className="speakers-images-container">
                    {SPEAKERS.map((speaker, index) => {
                        return (<MobileSpeakerImg key={index} speakerImgName={speaker.speakerImgName} speakerName={speaker.speakerName} speakerPosition={speaker.speakerPosition} />);
                    })}
                </div>
            </div>

        </div>
    )
}

export default MobileSpeakers;