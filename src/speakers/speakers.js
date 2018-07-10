import "./speakers.css";
import React, { Component } from 'react';
import { CONFERENCE_DATA } from '../data/conference-data';
import _ from 'lodash';
import { ListHeader } from '../common/list-header';
import Speaker from './speaker';

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
                                    {/*TODO: Assignment 1, add the ListHeader with a proper title*/}
                                    {/*TODO: Remove*/}
                                    <ListHeader title={group.title}/>

                                    {/*TODO: Assignment 2, use the Speaker component*/}
                                    {/*TODO: Remove*/}
                                    {group.speakers.map(speaker => (<Speaker speaker={speaker}/>))}
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
