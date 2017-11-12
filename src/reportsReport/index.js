import React from 'react';
import { List, Filter, Datagrid, ReferenceField, TextField, EditButton, ReferenceInput, SelectInput, TextInput, DeleteButton, ViewTitle } from 'admin-on-rest';
import { Card, CardText } from 'material-ui/Card';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import areIntlLocalesSupported from 'intl-locales-supported';
import persianUtils from 'material-ui-persian-date-picker-utils';
import FullNameField from '../users/FullNameField';
import CustomDateField from '../reports/CustomDateField';
import {
  Tooltip,
  XAxis, YAxis, Area,
  CartesianGrid, PieChart, Pie, Sector, 
  ResponsiveContainer } from '../../node_modules/recharts';

let DateTimeFormat;

/**
 * Use the native Intl.DateTimeFormat if available, or a polyfill if not.
 */
if (areIntlLocalesSupported(['fr', 'fa-IR'])) {
  DateTimeFormat = global.Intl.DateTimeFormat;
} else {
  const IntlPolyfill = require('intl');
  DateTimeFormat = IntlPolyfill.DateTimeFormat;
  require('intl/locale-data/jsonp/fr');
  require('intl/locale-data/jsonp/fa-IR');
}

const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
              {name: 'Group C', value: 300}, {name: 'Group D', value: 200}];

const styles = {
  firstCard: { marginBottom: '1em' },
  singleCard: { marginTop: '1em', marginBottom: '1em' },
  datePicker: { display: 'inline-block', margin: '1em' },
  button: { margin: '1em' },
};

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

function getInitialState() {
  return {
    activeIndex: 0,
  };
};

function onPieEnter(data, index) {
  this.setState({
    activeIndex: index,
  });
};

export const ReportsReport = (props) => (
  <div>
    <Card style={styles.firstCard}>
      <CardText>
        <div>
            <DatePicker
              hintText="Desde"
              firstDayOfWeek={0}
              style={styles.datePicker}
              formatDate={new DateTimeFormat('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              }).format}
              container="inline"
            />
            <DatePicker
              hintText="Hasta"
              firstDayOfWeek={0}
              style={styles.datePicker}
              formatDate={new DateTimeFormat('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              }).format}
              container="inline"
            />
            <RaisedButton style={styles.button} label={'Filtrar'} primary onClick={() => console.log('refresh values')} />
        </div>
      </CardText>
    </Card>

    <Card style={styles.singleCard}>
      <ViewTitle title="Registro de denuncias" />
			<div>
        <ResponsiveContainer width="100%" aspect={3}>
          <PieChart width={800} height={400}>
            <Pie 
              activeIndex={this.state.activeIndex}
              activeShape={renderActiveShape} 
              data={data} 
              cx={300} 
              cy={200} 
              innerRadius={60}
              outerRadius={80} 
              fill="#8884d8"
              onMouseEnter={this.onPieEnter}
            />
           </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>

    {/*<List title="Reports" {...props}>
      <Datagrid>
        <CustomDateField />
        <ReferenceField label="Reporter" source="userIdReporter" reference="users">
          <FullNameField />
        </ReferenceField>
        <ReferenceField label="User Reported" source="userId" reference="users">
          <FullNameField />
        </ReferenceField>
        <TextField source="type" label="type" />
        <TextField source="reason" label="Message" />
        <DeleteButton />
      </Datagrid>
    </List>*/}
  </div>
);