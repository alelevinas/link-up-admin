import React from 'react';
import { Card, CardTitle, CardHeader } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar'
import { translate } from 'admin-on-rest';
import mainLogo from './ic_launcher_web.png';

export default translate(({ translate }) => (
    <Card>
        <CardTitle title="Welcome to LinkUp Admin!" />
        <CardHeader
            title='.....'
            avatar={<Avatar src={mainLogo} size={100} />} />
    </Card>
));