import React, { Component } from 'react';
import { CONFERENCE_DATA } from '../data/conference-data';
import { ListHeader } from '../common/list-header';
import Session from './session';

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
                    this.state.groups.map((group, index) => (
                        <div className="schedule-item" key={`groupItem-${index}`}>
                            <ListHeader title={group.time}/>

                            {/* Loop over each session to show a Session*/}
                            {group.sessions.map((session, index) => (<Session key={`session-${index}`} session={session}/>))}
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default Schedule;
