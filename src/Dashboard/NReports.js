import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import ReportsIcon from 'material-ui/svg-icons/image/collections-bookmark';
import { translate } from 'admin-on-rest';

const styles = {
    card: { borderLeft: 'solid 4px #ff9800', flex: 1 },
    icon: { float: 'right', width: 64, height: 64, padding: 16, color: '#ff9800' },
};

export default translate(({ value, translate }) => (
    <Card style={styles.card}>
        <ReportsIcon style={styles.icon} />
        <CardTitle title={value} subtitle={value} />
    </Card>
));