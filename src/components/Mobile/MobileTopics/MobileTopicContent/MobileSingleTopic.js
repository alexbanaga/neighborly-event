import React from 'react'
import PropTypes from 'prop-types';
import './MobileTopicContent.scss';

const MobileSingleTopic = ({ imgUrl, title, paragraphContent }) => {
    return (
        <div className="mobile-single-topic-container">
            <div >
                <img className="single-topic-img" src={'../../../../public/images/' + imgUrl} />
            </div>
            <div className="single-topic-text-container">
                <div className="single-topic-title">{title}</div>
                <div className="single-topic-paragraph-content">{paragraphContent}</div>
            </div>
        </div>
    )
}

MobileSingleTopic.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    paragraphContent: PropTypes.string.isRequired
};

export default MobileSingleTopic;