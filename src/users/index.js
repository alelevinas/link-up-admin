import React from 'react';
import { List, Datagrid, TextField } from 'admin-on-rest';
import FullNameField from './FullNameField';
import ApproveButton from './ApproveButton';
import LinkToRelatedReports from './LinkToRelatedReports';
import rowStyle from './rowStyle';

export const UserList = (props) => (
    <List title="Users" {...props}>
        <Datagrid rowStyle={rowStyle}>
        	<FullNameField />
            <TextField source="description" />
            <TextField source="birthday" />
            <TextField source="age" />
            <TextField source="gender" />
			<LinkToRelatedReports />
			<ApproveButton style={{ padding: 0 }} />
        </Datagrid>
    </List>
);