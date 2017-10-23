import React from 'react';
import { List, Datagrid, EmailField, TextField } from 'admin-on-rest';
import CustomField from './mui/field/customfield';

export const UserList = (props) => (
    <List title="All users" {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <CustomField source="email" />
        </Datagrid>
    </List>
);