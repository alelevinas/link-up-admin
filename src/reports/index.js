import React from 'react';
import { List, Responsive, SimpleList, Edit, Create, Filter, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput, DeleteButton } from 'admin-on-rest';
import Icon from 'material-ui/svg-icons/image/collections-bookmark';
import FullNameField from '../users/FullNameField';

export const ReportIcon = Icon;

export const ReportsList = (props) => (
    <List title="Reports" {...props}>
        <Datagrid>
            <TextField label="Date" />
            <ReferenceField label="Reporter" source="userIdReporter" reference="users">
                <FullNameField />
            </ReferenceField>
            <ReferenceField label="User Reported" source="userId" reference="users" linkType={false}>
                <FullNameField />
            </ReferenceField>
            <TextField source="reason" />
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