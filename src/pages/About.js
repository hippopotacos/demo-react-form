import React from 'react';
import styles from './About.module.css';
import { PieChart, Pie, Text } from 'recharts'

const About = props => {
  const data = [
    {
      index: 0,
      name: 'データ1',
      value: 300,
    },
    {
      index: 1,
      name: 'データ2',
      value: 200,
    },
    {
      index: 2,
      name: 'データ3',
      value: 380,
    },
    {
      index: 3,
      name: 'データ3',
      value: 80,
    }
  ];

  //円グラフの各領域の色を定義
  const COLORS = [
    '#2250A2',
    '#da50a2',
  ];

  return(
    <div>
      <h1>About</h1>
      <h2 className={styles.subheading}>I am {props.name}</h2>
      <PieChart width={730} height={250}>
        <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={100} fill="#82ca9d" label/>
      </PieChart>
    </div>
  );
}

export default About;