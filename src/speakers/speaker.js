import "./speaker.css";
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Speaker extends Component {
    render() {
        return (
            <div className="speaker">
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
