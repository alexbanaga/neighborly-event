import React from 'react'
import './MobileSchedule.scss';
import MobileScheduleTitle from './MobileScheduleContent/MobileScheduleTitle';
import MobileScheduleDayContainer from './MobileScheduleContent/MobileScheduleItems/MobileScheduleDayContainer';
import { SCHEDULE } from '../../../configuration';

const MobileSchedule = () => {
    return (
        <div className="mobile-schedule">
            <div className="schedule-align">
                <MobileScheduleTitle />
                <div className="schedule-days">
                    <div className="day-1">
                        <MobileScheduleDayContainer dayLocation={0} day={SCHEDULE[0].dayNumber} events={SCHEDULE[0].events} />
                    </div>
                    <div className="day-2">
                        <MobileScheduleDayContainer dayLocation={1} day={SCHEDULE[1].dayNumber} events={SCHEDULE[1].events} />
                    </div>
                    <div className="day-3">
                        <MobileScheduleDayContainer dayLocation={2} day={SCHEDULE[2].dayNumber} events={SCHEDULE[2].events} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileSchedule;