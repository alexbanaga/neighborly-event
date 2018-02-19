import React from 'react'
import './ScheduleDayContainer.scss';

const dayLocationCases = {
    0: "day-03",
    1: "day-04",
    2: "day-05",
}
const eventLocationCases = {
    0:"event-0",
    1:"event-1",
    2:"event-2",
    3:"event-3",
    4:"event-4"
}
const ScheduleDayContainer = ({ day, dayLocation, events, imgPath }) => {
    return (
        <div className="schedule-container">
            <div className="schedule-day-container">
                <img className="schedule-img" src={imgPath} />
                <div className={"schedule-day " + dayLocationCases[dayLocation]}>
                    {day}
                </div>
            </div>
            <div className="events-container">
                {events.map((event) => {
                    return (
                        <div className={"single-event-container "+eventLocationCases[event.eventLocation]}>
                            <div className="single-event-time-container">
                                <div className="event-time">{event.time}</div>
                            </div>
                            <div>
                                <div className="event-title">{event.title}</div>
                                <div className="event-description">{event.description}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default ScheduleDayContainer;