import React from 'react';
import { Card, CardTitle, CardHeader } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import HomeIcon from 'material-ui/svg-icons/action/home';
import CodeIcon from 'material-ui/svg-icons/action/code';
import FlatButton from 'material-ui/FlatButton';
import { translate } from 'admin-on-rest';
import mainLogo from './ic_launcher_web.png';
import NReports from './NReports';

const styles = {
    welcome: { marginBottom: '2em' },
    flex: { display: 'flex' },
    leftCol: { flex: 1, marginRight: '1em', marginTop: '2em' },
    rightCol: { flex: 1, marginLeft: '1em' },
    singleCol: { marginTop: '2em' },
};

export default translate(({ translate }) => (
    <div>
        <Card>
            <CardTitle title="Welcome to LinkUp Admin!" />
            <CardHeader
                title='.....'
                avatar={<Avatar src={mainLogo} size={100} />} />
        </Card>
        <div style={styles.flex}>
            <div style={styles.leftCol}>
                <div style={styles.flex}>
                    <NReports value={'32 reports'} />
                    <NReports value={'32 reports'} />
                    <NReports value={'32 reports'} />
                </div>
            </div>
        </div>
    </div>
));