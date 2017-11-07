import React from 'react';
import { Card } from 'material-ui/Card';
import { ViewTitle } from 'admin-on-rest';
import {
  Tooltip,
  XAxis, YAxis, Area,
  CartesianGrid, AreaChart, Bar, BarChart,
  ResponsiveContainer } from '../../node_modules/recharts';


const data = [
      { name: 'Page A', uv: 4000, pv: 2400 },
      { name: 'Page B', uv: 3000, pv: 1398 },
      { name: 'Page C', uv: 2000, pv: 9800 },
      { name: 'Page D', uv: 2780, pv: 3908 },
      { name: 'Page E', uv: 1890, pv: 4800 },
      { name: 'Page F', uv: 2390, pv: 3800 },
      { name: 'Page G', uv: 3490, pv: 4300 },
];

const UsersReports = () => (
    <Card>
      <ViewTitle title="Actividad de usuarios" />
			<div>
        <ResponsiveContainer width="100%" aspect={3}>
          <AreaChart data={data}
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
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
);

export default UsersReports;