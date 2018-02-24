import React from 'react'
import Invite from './Invite/Invite';
import WhatIs from './WhatIs/WhatIs';
import Speakers from './Speakers/Speakers';
import Topics from './Topics/Topics';
import Schedule from './Schedule/Schedule';
import Bio from './Bio/Bio';
import Ending from './Ending/Ending';


const Desktop = () => {
    return (
        <div>
            <Invite />
            <WhatIs />
            <div className="overlap">
                <Speakers />
                <Topics />
                <Schedule />
                <Bio />
                <Ending />
            </div>
        </div>
    )
}

export default Desktop;