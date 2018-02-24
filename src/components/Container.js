import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MediaQuery from 'react-responsive';
import Desktop from './Desktop/Desktop';
import Mobile from './Mobile/Mobile';


class Container extends React.Component {
    constructor(props, context) {
        super(props, context);

    }
    redirect = () => {
        this.context.router.history.push("/");
    }
    render() {
        if (this.props.loggedIn == false){
            this.redirect();
        }
        return (
            this.props.loggedIn &&
            <div>
                <MediaQuery minDeviceWidth={800}>
                    <div>
                        <Desktop />
                    </div>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={800}>
                    <Mobile />
                </MediaQuery>
            </div>
        );
    }
}

Container.propTypes = {
    loggedIn: PropTypes.bool.isRequired
};

Container.contextTypes = {
    router: PropTypes.object
};


function mapStateToProps(state) {
    return {
        loggedIn: state.loginReducer.loggedIn
    };
}



export default connect(mapStateToProps)(Container);