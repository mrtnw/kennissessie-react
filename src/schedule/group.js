import './group.css';
import React from 'react';
import Session from './session';
import PropTypes from 'prop-types';

// Since this component does nothing special in terms of data fetching or state handling we can use the stateless component
// Read more about stateless components here: TODO: Add link
const Group = (props) => {
    return (
        <div className="group-item">
            <div className="group-item__header">{props.group.time}</div>

            {props.group.sessions.map((session, index) => <Session key={`session-${index}`} session={session}/>)}
        </div>
    );
};

Group.propTypes = {
    group: PropTypes.objectOf({
        time: PropTypes.string,
        session: PropTypes.objectOf({
            id: PropTypes.number,
            name: PropTypes.string,
            description: PropTypes.string,
            timeStart: PropTypes.string,
            timeEnd: PropTypes.string,
            speakerNames: PropTypes.arrayOf(PropTypes.string),
            language: PropTypes.string
        })
    })
};

export default Group;
