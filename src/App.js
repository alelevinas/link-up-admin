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
        <Resource name="reported" list={ReportsList} edit={ReportsEdit} create={ReportsCreate} remove={Delete} icon={ReportIcon} />
        <Resource name="useres" list={UserList} icon={UserIcon} />
    </Admin>
);

export default App;