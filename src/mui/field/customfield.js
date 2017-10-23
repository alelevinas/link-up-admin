import React from 'react';
import PropTypes from 'prop-types';

const CustomField = ({ record = {}, source }) =>
    <a href={record[source]}>
        {record[source]}
    </a>;

CustomField.propTypes = {
    record: PropTypes.object,
    source: PropTypes.string.isRequired,
};

export default CustomField;