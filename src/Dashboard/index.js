import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Welcome from './Welcome';
import NReports from './NReports';
import NBlocked from './NBlocked';
import NUsers from './NUsers';

const styles = {
    flex: { display: 'flex' },
    leftCol: { flex: 1, marginRight: '1em', marginTop: '2em' },
    middleCol: { flex: 1, marginLeft: '1em', marginRight: '1em', marginTop: '2em' },
    rightCol: { flex: 1, marginLeft: '1em', marginTop: '2em' },
    singleCol: { marginTop: '2em' },
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
	        <div style={styles.middleCol}>
	            <div style={styles.flex}>
	                <NBlocked value={'5 users blocked'} />
	            </div>
	        </div>  
	        <div style={styles.rightCol}>
	            <div style={styles.flex}>
	        		<NUsers value={'1000 Users'} />
        		</div>
        	</div>
	    </div>
	</div>
);