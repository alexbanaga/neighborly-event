import React from 'react'
import './TopicBackground.scss';

const TopicBackground = () => {
    return (
        <div className="topic-background">
            <img src='../../../../public/images/confernce-topics-background-icons.svg' />
            <img className="topic-bg-bottom-left" src='../../../../public/images/confernce-topics-background-icons.svg' />
            <div className="topic-bg-top-right">
                <img src='../../../../public/images/confernce-topics-background-icons.svg' />
            </div>
        </div>
    )
}

export default TopicBackground;