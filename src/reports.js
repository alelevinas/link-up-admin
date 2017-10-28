import React from 'react';
import { List, Responsive, SimpleList, Edit, Create, Filter, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput, DeleteButton } from 'admin-on-rest';
import Icon from 'material-ui/svg-icons/image/collections-bookmark';

export const ReportIcon = Icon;

export const ReportsList = (props) => (
    <List title="Reports" {...props}>
        <Datagrid>
            <TextField label="Date" />
            <TextField label="Reporter" source="userIdReporter" />
            <TextField label="User Reported" source="userId" />
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

export const ReportsEdit = (props) => (
    <Edit title={<ReportsTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <ReferenceInput label="User" source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Edit>
);

export const ReportsCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Create>
);