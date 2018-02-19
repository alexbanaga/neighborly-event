import React from 'react'
import './Ending.scss';
import InviteButton from '../Invite/InviteButton';

const Ending = () => {
    return (
        <div className="ending">
            <div className="ending-button-and-text-container">
                <div className="ending-text-container">
                    <div className="ending-header" data-text="THE FUTURE OF PUBLIC FINANCE">THE FUTURE OF PUBLIC FINANCE</div>
                    <div className="ending-text">Join us to revolutionize the trillion-dollar market that shapes our future.</div>
                    <div className="ending-underline"></div>
                    <div className="ending-date">May 14-15,<element className="ending-gray-text"> 2018 / The Battery</element> San Fransisco</div>
                </div>
                <div className="ending-button-container">
                    <InviteButton />
                    <div className="ending-button-under-text">* Must have received invitation to accept invitation.</div>
                </div>
            </div>
            <div className="ending-bottom-container">
                <div className="hr-seperator" />
            </div>
            <div className="ending-copyright-contact">
                <div className="ending-copyright">© 2018 tfpf Inc. All rights reserved. </div>
                <div className="ending-contact">
                    <div className="ending-contant-header">CONTACT</div>
                    <div className="ending-contant-email">22222@gmail.com</div>
                </div>
                <div className="ending-social">
                    <div className="ending-social-header">SOCIAL</div>
                    <div className="ending-social-icons">
                        <img className="icon first-icon" src="../../public/images/facebook-small_ipad.svg"/>
                        <img className="icon" src="../../public/images/twitter-small_ipad.svg"/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Ending;