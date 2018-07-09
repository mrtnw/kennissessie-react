import React from 'react';
import './list-header.css';

export const ListHeader = (props) => (
    <div className="list-header">{props.title}</div>
);

ListHeader.propTypes = {
    title: PropTypes.string
};