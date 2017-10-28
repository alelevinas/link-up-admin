import React from 'react';
import { List, Datagrid, EmailField, TextField } from 'admin-on-rest';
import CustomField from './mui/field/customfield';

export const UserList = (props) => (
    <List title="All users" {...props}>
        <Datagrid>
            <CustomField source="name" />
            <TextField source="description" />
            <TextField source="birthday" />
            <TextField source="age" />
            <TextField source="gender" />
            <TextField source="reports" />
        </Datagrid>
    </List>
);