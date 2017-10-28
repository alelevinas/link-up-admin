import React from 'react';
import { List, Datagrid, EmailField, TextField } from 'admin-on-rest';
import CustomField from './mui/field/customfield';
import FullNameField from './FullNameField';

export const UserList = (props) => (
    <List title="Users" {...props}>
        <Datagrid>
        	<FullNameField />
            <TextField source="description" />
            <TextField source="birthday" />
            <TextField source="age" />
            <TextField source="gender" />
            <TextField source="reports" />
        </Datagrid>
    </List>
);