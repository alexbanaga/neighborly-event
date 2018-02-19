import React from 'react';
import InviteButton from './InviteButton';
import './Invite.scss';
import Particles from 'react-particles-js';
import { particlesCfg } from './ParticlesCfg';
import {FIRST_SECTION} from '../../../configuration';

const Invite = ({ }) => {
    return (
        <div className="invite">
            <div className="particles-container"> <Particles className="particles" params={{
                particles: particlesCfg.particles,
                interactivity: particlesCfg.interactivity, retina_detected: particlesCfg.retina_detected
            }} /></div>
            <div className="invite-content">
                <div className="header" >{FIRST_SECTION.header}</div>
                <div className="minor-header">{FIRST_SECTION.minorHeader}</div>
                <div className="th">
                    May 14-15, <element className="text-style-1"> 2018 </element>/ The Battery SF
            </div>
                <div className="center-button"><InviteButton /></div>
                <div className="must-have">{FIRST_SECTION.alert}</div>
            </div>
        </div>
    )
}

export default Invite;