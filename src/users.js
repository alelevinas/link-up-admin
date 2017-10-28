import React from 'react';
import { List, Datagrid, EmailField, TextField } from 'admin-on-rest';
import CustomField from './mui/field/customfield';
import FullNameField from './FullNameField';
import ApproveButton from './ApproveButton';
import LinkToRelatedReports from './LinkToRelatedReports';


export const UserList = (props) => (
    <List title="Users" {...props}>
        <Datagrid>
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