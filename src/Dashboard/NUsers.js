import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import UsersIcon from 'material-ui/svg-icons/social/group';
import { translate } from 'admin-on-rest';

const styles = {
    card: { borderLeft: 'solid 4px #0000ff', flex: 1 },
    icon: { float: 'right', width: 64, height: 64, padding: 16, color: '#0000ff' },
};

export default translate(({ value, translate }) => (
    <Card style={styles.card}>
        <UsersIcon style={styles.icon} />
        <CardTitle title={value} subtitle={value} />
    </Card>
));