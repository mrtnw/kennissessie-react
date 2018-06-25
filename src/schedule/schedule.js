import React, { Component } from 'react';
import { CONFERENCE_DATA } from '../data/conference-data';
import GroupItem from './groupItem';
import PropTypes from 'prop-types';

// TODO: Add tests
class Schedule extends Component {
    constructor(props) {
        super(props);

        // Get the conference data from last year
        this.groups = CONFERENCE_DATA.schedule[0].groups;
    }

    render() {
        return (
            <div>
                {
                    // Loop over each group to show a GroupItem
                    this.groups.map((group, index) => <GroupItem group={group} key={`groupItem-${index}`}/>)
                }
            </div>
        );
    }
}

// TODO: Fill proptypes
Schedule.propTypes = {
    group: PropTypes.objectOf({
        time: PropTypes.string,
        sessions: PropTypes.arrayOf({
            id: PropTypes.number,
            name: PropTypes.string
        })
    })
};

export default Schedule;
