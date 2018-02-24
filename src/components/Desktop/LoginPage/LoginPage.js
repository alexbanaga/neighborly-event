import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Particles from 'react-particles-js';
import { particlesCfg } from './ParticlesCfg';
import './LoginPage.scss';

class LoginPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            username: "",
            password: ""
        }
    }

    Authenticate = () => {
        if (this.state.username == "admin" && this.state.password == "admin") {
            this.context.router.history.push("home");

        }
    }

    onEmailChanged = (event) => {
        this.setState({
            username: event.target.value
        });
    }
    onPasswordChanged = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    render() {
        return (
            <div className="login-page" >
                <div className="particles-container"> <Particles className="particles" params={{
                    particles: particlesCfg.particles,
                    interactivity: particlesCfg.interactivity, retina_detected: particlesCfg.retina_detected
                }} /></div>

                <div className="form-container">
                    <div className="form-bg">
                    </div>
                    <div className="form-content-container">
                        <div className="form-logo">
                            <div className="logo-text">Login</div>
                        </div>
                        <div >
                            <input value={this.state.username} onChange={this.onEmailChanged} className="login-inputs" type="email" placeholder={"Email"} />
                        </div>
                        <div >
                            <input value={this.state.password} onChange={this.onPasswordChanged} className="login-inputs" type="password" placeholder={"Password"} />
                        </div>
                        <div className="access-btn">
                            <div className="access-btn-text" onClick={() => { this.Authenticate() }}>Access Website</div>
                        </div>
                        <hr className="login-hr" />
                        <div className="login-text">
                            Want to attend the future of public finance confrernce? <div className="login-email"> Email us</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

LoginPage.propTypes = {

};

LoginPage.contextTypes = {
    router: PropTypes.object
};

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);