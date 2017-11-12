import React from 'react';
import { jsonServerRestClient, Admin, Resource, Delete } from 'admin-on-rest';
import sagas from './sagas';
import authClient from './authClient';
import myApiRestClient from './restClient';
import { ReportsList, ReportsEdit, ReportsCreate } from './reports';
import { UserList } from './users';
import Dashboard from './Dashboard';
import customRoutes from './customRoutes';
import Menu from './Menu';
import ReportIcon from 'material-ui/svg-icons/action/book';
import UserIcon from 'material-ui/svg-icons/social/group';
import { UsersReports } from './usersReports';


const App = () => (
    <Admin title="Linkup Admin" menu={Menu} customRoutes={customRoutes} authClient={authClient} dashboard={Dashboard} restClient={myApiRestClient} customSagas={sagas} >
		<Resource name="reports" list={ReportsList} remove={Delete} icon={ReportIcon} />
        <Resource name="users" list={UserList} icon={UserIcon} />
        <Resource name="usersReports" list={UsersReports} />
    </Admin>
);

export default App;