import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Welcome from './Welcome';
import NReports from './NReports';

const styles = {
    flex: { display: 'flex' },
    leftCol: { flex: 1, marginTop: '2em' }
};

export default () => (
	<div>
		<Welcome />
	    <div style={styles.flex}>
	        <div style={styles.leftCol}>
	            <div style={styles.flex}>
	                <NReports value={'32 reports'} />
	            </div>
	        </div>
	    </div>
	</div>
);