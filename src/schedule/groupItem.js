import './groupItem.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GroupItem extends Component {
    render() {
        return (
            <div className="group-item">
                <div>{this.props.group.time}</div>

                {this.props.group.sessions.map((session, index) => <div key={`session-${index}`}>{session.name}</div>)}
            </div>
        );
    }
}

GroupItem.propTypes = {
    group: PropTypes.objectOf({
        time: PropTypes.string,
        sessions: PropTypes.arrayOf({
            id: PropTypes.number,
            name: PropTypes.string
        })
    })
};

export default GroupItem;
