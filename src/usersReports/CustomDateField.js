import React from 'react';
import pure from 'recompose/pure';

const CustomDateField = ({ record = {} }) =>
    <a>
    	{(new Date(Number(record.date))).toLocaleString()}
    </a>;


const PureFullDateField = pure(CustomDateField);

PureFullDateField.defaultProps = {
    source: 'date',
    label: 'Fecha',
};

export default PureFullDateField;