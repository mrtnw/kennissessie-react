import "./speaker.css";
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Speaker extends Component {
    // TODO: Assignment - Speakers 5, add a event handle to show a detail view from the users

    render() {
        return (
            <div className="speaker">
                //TODO: Assignment - Speakers 4, show the speaker name
                Speaker
            </div>
        );
    }
}

Speaker.propTypes = {
    speaker: PropTypes.shape({
        name: PropTypes.string,
        about: PropTypes.string,
        location: PropTypes.string,
        jobDescript: PropTypes.string,
        linkedin: PropTypes.string,
        github: PropTypes.string,
        emailAddres: PropTypes.string,
        deviceId: PropTypes.string,
        twitter: PropTypes.string,
        profilePic: PropTypes.string,
    })
};

export default Speaker;
