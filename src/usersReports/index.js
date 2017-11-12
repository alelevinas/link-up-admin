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
  CartesianGrid, AreaChart, Bar, BarChart,
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

const data = [
  { date: 'XX/YY/ZZZZ', uv: 4000, pv: 2400 },
  { date: 'XX/YY/ZZZZ', uv: 3000, pv: 1398 },
  { date: 'XX/YY/ZZZZ', uv: 2000, pv: 9800 },
  { date: 'XX/YY/ZZZZ', uv: 2780, pv: 3908 },
  { date: 'XX/YY/ZZZZ', uv: 1890, pv: 4800 },
  { date: 'XX/YY/ZZZZ', uv: 2390, pv: 3800 },
  { date: 'XX/YY/ZZZZ', uv: 3490, pv: 4300 },
];

const styles = {
  firstCard: { marginBottom: '1em' },
  singleCard: { marginTop: '1em', marginBottom: '1em' },
  datePicker: { display: 'inline-block', margin: '1em' },
  button: { margin: '1em' },
};

export const UsersReports = (props) => (
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
      <ViewTitle title="Actividad de usuarios" />
			<div>
        <ResponsiveContainer width="100%" aspect={3}>
          <AreaChart data={props.data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="commonUsers" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            <Area type="monotone" dataKey="premiumUsers" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>

    <List title="Actividad de usuarios" {...props}>
      <Datagrid>
        <TextField source="date" label="Fecha" sortable={false}
                style={{ textAlign: 'center' }}
                headerStyle={{ textAlign: 'center' }}/>
        <TextField source="commonUsers" label="Usuarios comunes" sortable={false}
                style={{ textAlign: 'center' }}
                headerStyle={{ textAlign: 'center' }} />
        <TextField source="premiumUsers" label="Usuarios premium" sortable={false}
                style={{ textAlign: 'center' }}
                headerStyle={{ textAlign: 'center' }} />
      </Datagrid>
    </List>
  </div>
);