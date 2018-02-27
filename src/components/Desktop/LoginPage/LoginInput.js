import React from 'react';
import PropTypes from 'prop-types';
import './LoginInput.scss';

const LoginInput = ({ onEnter, onAccessKeyChange }) => {
    return (
        <div className="login-input-container">
            <div className="input-group mb-3 input-container">
                <div className="input-group-prepend">
                    <input className="access-input" placeholder="Access Key" type="password" onChange={onAccessKeyChange} />
                </div>
                <div className="input-group-append">
                    <div className="btn-seperator"></div>
                    <button className="enter-button" onClick={onEnter}>ENTER</button>
                </div>
            </div>
        </div>
    )
}

LoginInput.propTypes = {
    onEnter: PropTypes.func.isRequired,
    onAccessKeyChange: PropTypes.func.isRequired
};

export default LoginInput;