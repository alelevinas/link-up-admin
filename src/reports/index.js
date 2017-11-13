import React from 'react';
import { List, Filter, Datagrid, ReferenceField, TextField, EditButton, ReferenceInput, SelectInput, TextInput, DeleteButton } from 'admin-on-rest';
import Icon from 'material-ui/svg-icons/image/collections-bookmark';
import FullNameField from '../users/FullNameField';
import CustomDateField from './CustomDateField';
import BlockUserButton from './BlockUserButton';

export const ReportIcon = Icon;

export const ReportsList = (props) => (
    <List title="Reports" {...props}>
        <Datagrid>
            <CustomDateField />
            <ReferenceField label="Reporter" source="userIdReporter" reference="users">
                <FullNameField />
            </ReferenceField>
            <ReferenceField label="User Reported" source="userId" reference="users">
                <FullNameField />
            </ReferenceField>
            <TextField source="type" label="type" />
            <TextField source="reason" label="Message" />
            <BlockUserButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

const ReportsFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

const ReportsTitle = ({ record }) => {
    return <span>Report {record ? `"${record.title}"` : ''}</span>;
};