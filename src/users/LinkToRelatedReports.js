import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import { translate } from 'admin-on-rest';
import { stringify } from 'query-string';

import { ReportIcon } from '../reports';

const LinkToRelatedReports = ({ record, translate }) => (
    <FlatButton
        primary
        label='Reports'
        icon={<ReportIcon />}
        containerElement={<Link
            to={{
                pathname: '/reports',
                search: stringify({ page: 1, perPage: 25, filter: JSON.stringify({ userIdReporter: record.id }) }),
            }}
        />}
    />
);

export default translate(LinkToRelatedReports);