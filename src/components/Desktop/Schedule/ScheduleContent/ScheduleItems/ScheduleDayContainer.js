import React from 'react'
import './ScheduleDayContainer.scss';

const ScheduleDayContainer = ({ day, scheduleObject }) => {
    debugger
    return (
        <div>
            <div className="schedule-day">
                {day}
            </div>
            {scheduleObject.map((event) => {
                return (
                    <div></div>
                );
            })}
        </div>
    )
}

export default ScheduleDayContainer;