import './group.css';
import React from 'react';
import Session from './session';
import PropTypes from 'prop-types';
import { ListHeader } from '../common/list-header';

// TODO: Add tests
// Since this component does nothing special in terms of data fetching or state handling we can use the stateless component
// Read more about stateless components here: TODO: Add link
const Group = (props) => {
    return (
        <div className="group-item">
            <ListHeader title={props.group.time}/>

            {props.group.sessions.map((session, index) => <Session key={`session-${index}`} session={session}/>)}
        </div>
    );
};

Group.propTypes = {
    group: PropTypes.shape({
        time: PropTypes.string,
        session: PropTypes.shape({
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
