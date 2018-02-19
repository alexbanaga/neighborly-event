import React from 'react'
import './ScheduleDayContainer.scss';

const ScheduleDayContainer = ({ day, events, imgPath }) => {
    return (
        <div className="schedule-day-container">
            <img className="schedule-img" src={imgPath} />
            <div className="schedule-day">
                {day}
            </div>
        </div>
    )
}

export default ScheduleDayContainer;