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
                <div className="schedule-days">
                    <div className="day-1">
                        <ScheduleDayContainer dayLocation={0} imgPath={'../../../public/images/03-schedule-line.svg'} day={SCHEDULE[0].dayNumber} events={SCHEDULE[0].events} />
                    </div>
                    <div className="day-2">
                        <ScheduleDayContainer dayLocation={1} imgPath={'../../../public/images/04-schedule-line.svg'} day={SCHEDULE[1].dayNumber} events={SCHEDULE[1].events} />
                    </div>
                    <div className="day-3">
                        <ScheduleDayContainer dayLocation={2} imgPath={'../../../public/images/05-schedule-line.svg'} day={SCHEDULE[2].dayNumber} events={SCHEDULE[2].events} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Schedule;