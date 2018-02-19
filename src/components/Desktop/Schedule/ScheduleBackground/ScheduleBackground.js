import React from 'react'
import './ScheduleBackground.scss';

const ScheduleBackground = () => {
    return (
        <div className="schedule-background">
            <img className="schedule-bg-bottom-left" src='../../../../public/images/schedule-background-icon.svg' />
            <img className="schedule-bg-top-right" src='../../../../public/images/schedule-background-icon.svg' />
        </div>
    )
}

export default ScheduleBackground;