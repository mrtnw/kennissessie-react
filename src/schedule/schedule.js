import React, { Component } from 'react';
import { CONFERENCE_DATA } from '../data/conference-data';
import Group from './group';

// TODO: Add tests
class Schedule extends Component {
    constructor(props) {
        super(props);

        // Get the conference data from last year
        this.state = {
            groups: CONFERENCE_DATA.schedule[0].groups
        }
    }

    render() {
        return (
            <div>
                {
                    // Loop over each group to show a Group
                    this.state.groups.map((group, index) => <Group group={group} key={`groupItem-${index}`}/>)
                }
            </div>
        );
    }
}

export default Schedule;
