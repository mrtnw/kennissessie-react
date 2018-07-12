import "./speakers.css";
import React, { Component } from 'react';
import { CONFERENCE_DATA } from '../data/conference-data';
import _ from 'lodash';
{/*TODO: Assignment - Speakers 1, add the ListHeader with a proper title*/}
// import ListHeader from '../common/list-header';
{/*TODO: Assignment - Speakers 2, use the Speaker component*/}
// import Speaker from './speaker';

class Speakers extends Component {
    constructor(props) {
        super(props);

        /**
         * Sort and group the speakers into an array like:
         * [
         *  {title: "A", speakers: [Speaker, Speaker],
         *  {title: "B", speakers: [Speaker, Speaker],
         * ]
         **/
        const sorted = _.sortBy(CONFERENCE_DATA.speakers, (speaker) => speaker.name);
        const grouped = _.groupBy(sorted, (speaker) => speaker.name[0]);
        const groupedArray = _.map(grouped, (speakers, title) => ({title, speakers}));

        this.state = {
            groups: groupedArray
        };
    }

    render() {
        return (
            <div>
                {
                    this.state.groups.map((group, index) => {
                            return (
                                <div className="speaker-item" key={`speaker-item-${index}`}>
                                    {/*TODO: Assignment - Speakers 1, add the ListHeader with a proper title*/}
                                    {/*TODO: Assignment - Speakers 2, use the Speaker component*/}
                                    {/*TODO: Assignment - Speakers 3, add the speaker as props to the Speaker component*/}
                                </div>
                            )
                        }
                    )
                }
            </div>
        );
    }
}

export default Speakers;
