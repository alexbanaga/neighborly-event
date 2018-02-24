import React from 'react';
import MediaQuery from 'react-responsive';
import Desktop from './Desktop/Desktop';
import Mobile from './Mobile/Mobile';

const Container = () => {
    return (
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
};

export default Container;
