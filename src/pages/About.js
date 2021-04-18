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
    <div className="w-96 mx-auto max-w-full border-l border-r">
      <div>
        <h1>About</h1>
        <h2 className={styles.subheading}>I am {props.name}</h2>
        <div>
          <PieChart width={250} height={250}>
            <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={100} fill="#82ca9d" label/>
          </PieChart>
        </div>
        <div className="mt-8">
          <ul className="overflow-x-auto whitespace-nowrap">
            <li className="survey inline-block px-8 py-5 bg-blue-700 rounded-lg">
              <div>
                <div>graph</div>
                <p>title</p>
                <dl>
                  <div>
                    <dt>a</dt>
                    <dd>60%</dd>
                  </div>
                  <div>
                    <dt>b</dt>
                    <dd>20%</dd>
                  </div>
                  <div>
                    <dt>c</dt>
                    <dd>20%</dd>
                  </div>
                </dl>
              </div>
            </li>
            <li className="survey inline-block px-8 py-5 bg-blue-700 rounded-lg">
              <div>
                <div>graph</div>
                <p>title</p>
                <dl>
                  <div>
                    <dt>a</dt>
                    <dd>60%</dd>
                  </div>
                  <div>
                    <dt>b</dt>
                    <dd>20%</dd>
                  </div>
                  <div>
                    <dt>c</dt>
                    <dd>20%</dd>
                  </div>
                </dl>
              </div>
            </li>
            <li className="survey inline-block px-8 py-5 bg-blue-700 rounded-lg">
              <div>
                <div>graph</div>
                <p>title</p>
                <dl>
                  <div>
                    <dt>a</dt>
                    <dd>60%</dd>
                  </div>
                  <div>
                    <dt>b</dt>
                    <dd>20%</dd>
                  </div>
                  <div>
                    <dt>c</dt>
                    <dd>20%</dd>
                  </div>
                </dl>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;