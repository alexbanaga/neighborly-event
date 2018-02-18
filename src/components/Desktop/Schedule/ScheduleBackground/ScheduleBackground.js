import React from 'react'
import './ScheduleBackground.scss';

export const ScheduleBackground = ({ }) => {
    return (
        <div className="schedule-background">
            <img className="schedule-bg-bottom-left" src='../../../../public/images/schedule-background-icon.svg' />
            <div className="schedule-bg-top-right">
                <img src='../../../../public/images/schedule-background-icon.svg' />
            </div>
        </div>
    )
}

export default ScheduleBackground;