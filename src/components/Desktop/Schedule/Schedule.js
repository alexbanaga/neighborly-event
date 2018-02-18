import React from 'react'
import './Schedule.scss';
import ScheduleBackground from './ScheduleBackground/ScheduleBackground';
import ScheduleTitle from './ScheduleContent/ScheduleTitle';
import ScheduleDayContainer from './ScheduleContent/ScheduleItems/ScheduleDayContainer';
import { SCHEDULE } from '../../../configuration';

const Schedule = ({ }) => {
    return (
        <div className="schedule">
            <ScheduleBackground />
            <div className="schedule-align">
                <ScheduleTitle />
                {SCHEDULE.map((scheduleDay) => {
                    return (
                        <ScheduleDayContainer day={scheduleDay.dayNumber} scheduleObject={scheduleDay.events} />
                    );
                })}
            </div>
        </div>
    )
}

export default Schedule;