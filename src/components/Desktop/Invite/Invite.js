import React from 'react';
import InviteButton from './InviteButton';
import './Invite.scss';
import Particles from 'react-particles-js';
import { particlesCfg } from './ParticlesCfg';

const Invite = ({ }) => {
    return (
        <div className="invite">
            <div className="particles-container"> <Particles className="particles" params={{
                particles: particlesCfg.particles,
                interactivity: particlesCfg.interactivity, retina_detected: particlesCfg.retina_detected
            }} /></div>
            <div className="invite-content">
                <div className="header" data-text="THE FUTURE OF PUBLIC FINANCE">THE FUTURE OF PUBLIC FINANCE</div>
                <div className="minor-header">Join us to revolutionize the trillion-dollar market that shapes our future.</div>
                <div className="th">
                    May 14-15, <element className="text-style-1"> 2018 </element>/ The Battery SF
            </div>
                <div className="center-button"><InviteButton /></div>
                <div className="must-have">MUST HAVE RECEIVED INVATIATION TO ACCEPT INVATIATION</div>
            </div>
        </div>
    )
}

export default Invite;