import React, { Component } from 'react';
import { CONFERENCE_DATA } from '../data/conference-data';
import Group from './group';
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
                    // Loop over each group to show a Group
                    this.groups.map((group, index) => <Group group={group} key={`groupItem-${index}`}/>)
                }
            </div>
        );
    }
}

// TODO: Fill proptypes correctly
Schedule.propTypes = {
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

export default Schedule;
