import React from 'react'
import MobileInvite from './MobileInvite/MobileInvite';
import MobileWhatIs from './MobileWhatIs/MobileWhatIs';
import MobileSpeakers from './MobileSpeakers/MobileSpeakers';
import MobileTopics from './MobileTopics/MobileTopics';
import MobileSchedule from './MobileSchedule/MobileSchedule';
import MobileBio from './MobileBio/MobileBio';
import MobileEnding from './MobileEnding/MobileEnding';


const Mobile = () => {
    return (
        <div>
            <MobileInvite />
            <div className="overlap-mobile">
                <MobileWhatIs />
                <MobileSpeakers />
                <MobileTopics />
                <MobileSchedule />
                <MobileBio />
                <MobileEnding />
            </div>
        </div>
    )
}

export default Mobile;