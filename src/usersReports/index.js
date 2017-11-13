import React from 'react';
import { List, Show, Filter, Datagrid, ReferenceField, TextField, EditButton, ReferenceInput, SelectInput, TextInput, DeleteButton, ViewTitle } from 'admin-on-rest';
import { Card, CardText } from 'material-ui/Card';
import DatePicker from 'material-ui/DatePicker';
import areIntlLocalesSupported from 'intl-locales-supported';
import persianUtils from 'material-ui-persian-date-picker-utils';
import FullNameField from '../users/FullNameField';
import CustomDateField from './CustomDateField';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Tooltip,
  XAxis, YAxis, Area,
  CartesianGrid, AreaChart, Bar, BarChart,
  ResponsiveContainer } from '../../node_modules/recharts';
import FilterButton from './FilterButton';

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

const styles = {
  firstCard: { marginBottom: '1em' },
  singleCard: { marginTop: '1em', marginBottom: '1em' },
  datePicker: { display: 'inline-block', margin: '1em' },
  button: { margin: '1em' },
};

function transformData(ids, data){
  var data2 = [];
  ids.map(id =>
    data2.push(data[id]));
  for(var i = 0; i < data2.length; i++){
    data2[i]['Usuarios Comunes'] = data2[i]['commonUsers'];
    data2[i]['Usuarios Premium'] = data2[i]['premiumUsers'];
    let year = 'numeric';
    let month = '2-digit';
    let day = '2-digit';
    data2[i]['dateFormatted'] = (new Date((Number(data2[i]['date'])) * 1000)).toLocaleString(undefined,{year, month, day});
  }
  return data2;
}

const ChartGrid = ({ ids, data, basePath }) => (
  <div style={{ margin: '1em' }}>
    <ResponsiveContainer width="100%" aspect={3}>
      <AreaChart data={transformData(ids, data)}
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
        <XAxis dataKey="dateFormatted" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="Usuarios Comunes" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
        <Area type="monotone" dataKey="Usuarios Premium" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);
ChartGrid.defaultProps = {
  data: {},
  ids: [],
};

if(dateFrom == null)
  var dateFrom = 0;
if(dateTo == null)
  var dateTo = Date.now();

function fromDateChanged(event, date) {
  console.log("old defaultProps -> " + dateFrom);
  console.log('date desdeee', Math.round(date.getTime()/1000));
  dateFrom = Math.round(date.getTime()/1000);
  console.log("new defaultProps -> " + dateFrom);
  return dateFrom;
}

function toDateChanged(event, date) {
  console.log('date hasta', Math.round(date.getTime()/1000));
  dateTo = Math.round(date.getTime()/1000);
  return dateTo;
}

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
              onChange={props.dateFrom = fromDateChanged}
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
              onChange={props.dateTo = toDateChanged}
              container="inline"
            />
            <FilterButton />
        </div>
      </CardText>
    </Card>
    
    <List title="Actividad de usuarios" {...props} pagination={null} sort={{ field: 'date', order: 'ASC' }}>
      <ChartGrid />
    </List>

    <List title="Actividad de usuarios" {...props} filter={{ dateFrom: dateFrom, dateTo: dateTo }} actions={null} sort={{ field: 'date', order: 'DESC' }}>
      <Datagrid>
        <TextField source="dateFormatted" label="Fecha" sortable={false}
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