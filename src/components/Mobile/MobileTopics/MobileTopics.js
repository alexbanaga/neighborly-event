import React from 'react'
import './MobileTopics.scss';
import { LEFT_TOPICS, RIGHT_TOPICS } from '../../../configuration';
import MobileTopicTitle from './MobileTopicContent/MobileTopicTitle';
import MobileSingleTopic from './MobileTopicContent/MobileSingleTopic';

const MobileTopics = () => {
    const topics = LEFT_TOPICS.concat(RIGHT_TOPICS);
    return (
        <div className="mobile-topic">
            <div className="topic-align">
                <MobileTopicTitle />
                <div className="left-topics">
                    {topics.map((topicData, idx) => {
                        return (<MobileSingleTopic key={idx} imgUrl={topicData.imgUrl} title={topicData.title}
                            paragraphContent={topicData.paragraphContent} />);
                    })}
                </div>
            </div>
        </div>
    )
}

export default MobileTopics;