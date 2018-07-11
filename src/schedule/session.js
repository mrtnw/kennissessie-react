import './session.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Session extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isCollapsed: true
        }
    }

    // fn = () => {... is used to bind to the component scope
    toggleCollapse = () => {
        // Update the state
        this.setState(prevState => {
            prevState.isCollapsed = !prevState.isCollapsed;
            return prevState;
        });
    };

    render() {
        return (
            <div onClick={this.toggleCollapse} className="session">
                {this.props.session.name}

                {
                    // Only show the following div when the component state is not collapsed
                    !this.state.isCollapsed && (
                        <div className="session__speakers">
                            {this.props.session.speakerNames.map(speakerName => <div className="session__speaker">{speakerName}</div> )}
                        </div>
                    )
                }

            </div>
        );
    }
}

Session.propTypes = {
    session: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        timeStart: PropTypes.string,
        timeEnd: PropTypes.string,
        speakerNames: PropTypes.arrayOf(PropTypes.string),
        language: PropTypes.string
    })
};

export default Session;
