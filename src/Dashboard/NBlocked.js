import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import BlockedIcon from 'material-ui/svg-icons/content/block';
import { translate } from 'admin-on-rest';

const styles = {
    card: { borderLeft: 'solid 4px #ff0000', flex: 1 },
    icon: { float: 'right', width: 64, height: 64, padding: 16, color: '#ff0000' },
};

export default translate(({ value, translate }) => (
    <Card style={styles.card}>
        <BlockedIcon style={styles.icon} />
        <CardTitle title={value} subtitle={value} />
    </Card>
));