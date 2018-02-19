import React from 'react'
import PropTypes from 'prop-types';
import './TopicContent.scss';

const SingleTopic = ({ imgUrl, title, paragraphContent }) => {
    return (
        <div className="single-topic-container">
            <div className="single-topic-img">
                <img src={'../../../../public/images/' + imgUrl} />
            </div>
            <div className="single-topic-text-container">
                <div className="single-topic-title">{title}</div>
                <div className="single-topic-paragraph-content">{paragraphContent}</div>
            </div>
        </div>
    )
}

SingleTopic.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    paragraphContent: PropTypes.string.isRequired
};

export default SingleTopic;