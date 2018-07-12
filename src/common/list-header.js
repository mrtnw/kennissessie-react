import React from 'react';
import PropTypes from 'prop-types';
import './list-header.css';

const ListHeader = (props) => (
    <div className="list-header">{props.title}</div>
);

ListHeader.propTypes = {
    title: PropTypes.string
};

export default ListHeader;