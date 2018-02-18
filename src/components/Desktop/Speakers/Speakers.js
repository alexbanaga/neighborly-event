import React from 'react'
import './Speakers.scss';
import SpeakerImg from './SpeakerImg/SpeakerImg';
import { SPEAKERS } from '../../../configuration';

const Speakers = () => {
    return (
        <div className="speakers">
            <div className="speakers-container">
                <div className="speakers-text-container">
                    <div className="speakers-header">SPEAKERS</div>
                    <div className="speakers-underline"></div>
                    <div className="speakers-coming-soon">More speakers coming soon...</div>
                </div>
                <div className="speakers-images-container">
                    {SPEAKERS.map((speaker) => {
                        return (<SpeakerImg speakerImgName={speaker.speakerImgName} speakerName={speaker.speakerName} speakerPosition={speaker.speakerPosition} />);
                    })}
                </div>
            </div>

        </div>
    )
}

export default Speakers;