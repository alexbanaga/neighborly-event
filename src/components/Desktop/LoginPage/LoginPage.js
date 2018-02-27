import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Particles from 'react-particles-js';
import { particlesCfg } from './ParticlesCfg';
import { FIRST_SECTION } from '../../../configuration';
import LoginInput from './LoginInput';
import './LoginPage.scss';
import * as loginActions from '../../../actions/Actions';

class LoginPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            access_key : ""
        }
    }

    Authenticate = () => {
        this.props.actions.login(this.state.access_key).then(() => {
            if (this.props.loggedIn) {
                this.context.router.history.push("home");
            }
        });
    }

    onAccessKeyChange = (event) => {
        this.setState({
            access_key: event.target.value
        });
    }


    render() {
        return (
            <div className="login-page">
                <div className="particles-container"> <Particles className="particles" params={{
                    particles: particlesCfg.particles,
                    interactivity: particlesCfg.interactivity, retina_detected: particlesCfg.retina_detected
                }} /></div>
                <div className="invite-content">
                    <div className="header" >{FIRST_SECTION.header}</div>
                    <div className="minor-header">{FIRST_SECTION.minorHeader}</div>
                    <div className="th">
                        May 14-15, <element className="text-style-1"> 2018 </element>/ The Battery SF
                    <LoginInput onAccessKeyChange={this.onAccessKeyChange} onEnter={this.Authenticate}/>

                    </div>
                    <div className="must-have">{FIRST_SECTION.alert_login}</div>
                </div>
            </div>
        )
    }

}

LoginPage.propTypes = {
    actions: PropTypes.object.isRequired,
    loggedIn: PropTypes.bool.isRequired
};

LoginPage.contextTypes = {
    router: PropTypes.object
};

function mapStateToProps(state) {
    return {
        loggedIn: state.loginReducer.loggedIn
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(loginActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);