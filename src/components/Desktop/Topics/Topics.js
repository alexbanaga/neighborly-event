import React from 'react'
import './Topics.scss';
import { LEFT_TOPICS, RIGHT_TOPICS } from '../../../configuration';
import TopicBackground from './TopicBackground/TopicBackground';
import TopicTitle from './TopicContent/TopicTitle';
import SingleTopic from './TopicContent/SingleTopic';

const Topics = () => {
    return (
        <div className="topic">
            <TopicBackground />
            <div className="topic-align">
                <TopicTitle />
                <div className="left-topics">
                    {LEFT_TOPICS.map((topicData, idx) => {
                        return (<SingleTopic key={idx} imgUrl={topicData.imgUrl} title={topicData.title}
                            paragraphContent={topicData.paragraphContent} />);
                    })}
                </div>

                <div className="right-topics">
                    {RIGHT_TOPICS.map((topicData, idx) => {
                        return (<SingleTopic key={idx} imgUrl={topicData.imgUrl} title={topicData.title}
                            paragraphContent={topicData.paragraphContent} />);
                    })}
                </div>

            </div>
        </div>
    )
}

export default Topics;