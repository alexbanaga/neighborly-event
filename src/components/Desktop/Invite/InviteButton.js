import React from 'react'
import './Invite.scss';
import {FIRST_SECTION} from '../../../configuration';

const InviteButton = () => {
    return (
        <div className="inviteButton">
            <div className="accept-invite-text">
                <div className="container">
                    <img className="envelope" src="../../public/images/email-color-icon.svg" />
                    <div className="text">{FIRST_SECTION.buttonContent}</div>
                </div>
            </div>
        </div>
    )
}

export default InviteButton;