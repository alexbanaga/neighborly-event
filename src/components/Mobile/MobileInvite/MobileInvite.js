import React from 'react';
import InviteButton from '../../Desktop/Invite/InviteButton';
import './MobileInvite.scss';
import {FIRST_SECTION} from '../../../configuration';

const MobileInvite = () => {
    return (
        <div className="mobile-invite">
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

export default MobileInvite;