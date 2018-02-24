import React from 'react'
import PropTypes from 'prop-types';
import './MobileScheduleDayContainer.scss';

const dayLocationCases = {
    0: "day-03",
    1: "day-04",
    2: "day-05",
}
const eventLocationCases = {
    0: "event-0",
    1: "event-1",
    2: "event-2",
    3: "event-3",
    4: "event-4"
}
const MobileScheduleDayContainer = ({ day, dayLocation, events }) => {
    return (
        <div className="mobile-schedule-container">
            <div className="schedule-day-container">
                <div className={"schedule-day " + dayLocationCases[dayLocation]}>
                    {day}
                </div>
                <div className="events-container">
                    {events.map((event, idx) => {
                        return (
                            <div key={idx} className={"single-event-container " + eventLocationCases[event.eventLocation]}>

                                <div>
                                    <div className="event-title">{event.title}</div>
                                    <div className="event-description">{event.description}</div>
                                    <div className={"event-time " + eventLocationCases[event.eventLocation]}>{event.time}</div>

                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

        </div>
    )
}


MobileScheduleDayContainer.propTypes = {
    day: PropTypes.string.isRequired,
    dayLocation: PropTypes.number.isRequired,
    events: PropTypes.array.isRequired,
    imgPath: PropTypes.string.isRequired
};

export default MobileScheduleDayContainer;