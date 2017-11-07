import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { translate, DashboardMenuItem, MenuItemLink } from 'admin-on-rest';
import ReportIcon from 'material-ui/svg-icons/action/book';
import UserIcon from 'material-ui/svg-icons/social/group';
import ReportUsersIcon from 'material-ui/svg-icons/action/timeline';
import ReportReportsIcon from 'material-ui/svg-icons/action/donut-large';

const items = [
    { name: 'reports', label: 'Denuncias', icon: <ReportIcon /> },
    { name: 'users', label: 'Usuarios', icon: <UserIcon /> },
];

const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: '100%',
    },
};

const Menu = ({ onMenuTap, translate, logout }) => (
    <div style={styles.main}>
        <DashboardMenuItem onClick={onMenuTap} />
        {items.map(item => (
            <MenuItemLink
                key={item.name}
                to={`/${item.name}`}
                primaryText={`${item.label}`}
                leftIcon={item.icon}
                onClick={onMenuTap}
            />
        ))}
        <MenuItemLink
            to="/usersReports"
            primaryText={'Reportes usuarios'}
            leftIcon={<ReportUsersIcon />}
            onClick={onMenuTap}
        />
        <MenuItemLink
            to="/reportsReports"
            primaryText={'Reportes denuncias'}
            leftIcon={<ReportReportsIcon />}
            onClick={onMenuTap}
        />
        {logout}
    </div>
);

const enhance = compose(
    connect(state => ({
        theme: state.theme,
        locale: state.locale,
    })),
    translate,
);

export default enhance(Menu);