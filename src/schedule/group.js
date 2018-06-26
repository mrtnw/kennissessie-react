import './group.css';
import React, { Component } from 'react';
import Session from './session';
import PropTypes from 'prop-types';

class Group extends Component {
    render() {
        return (
            <div className="group-item">
                <div className="group-item__header">{this.props.group.time}</div>

                {this.props.group.sessions.map((session, index) => <Session key={`session-${index}`} session={session}/>)}
            </div>
        );
    }
}

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
