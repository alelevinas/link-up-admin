import React from 'react';
import { jsonServerRestClient, Admin, Resource, Delete } from 'admin-on-rest';

import authClient from './authClient';
import myApiRestClient from './restClient';
import { ReportsList, ReportsEdit, ReportsCreate } from './reports';
import { UserList } from './users';
import Dashboard from './Dashboard';

import ReportIcon from 'material-ui/svg-icons/action/book';
import UserIcon from 'material-ui/svg-icons/social/group';

const App = () => (
    <Admin title="Linkup Admin" authClient={authClient} dashboard={Dashboard} restClient={myApiRestClient} >
        <Resource name="reported" options={{ label: 'Reports' }} list={ReportsList} remove={Delete} icon={ReportIcon} />
        <Resource name="users" options={{ label: 'Users' }} list={UserList} icon={UserIcon} />
    </Admin>
);

export default App;