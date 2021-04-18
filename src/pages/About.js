import React from 'react';
import styles from './About.module.css';
// import { PieChart, Pie, Text } from 'recharts'
import { PieChart } from "react-minimal-pie-chart";

const myData = [
  { title: "Dogs", value: 50, color: "#f00" },
  { title: "Cats", value: 30, color: "#0f0" },
  { title: "Dragons", value: 20, color: "#00f" },
];

const About = props => {
  return(
    <div className="w-96 mx-auto max-w-full border-l border-r">
      <div>
        <h1>About</h1>
        <h2 className={styles.subheading}>I am {props.name}</h2>
        <div className="mt-8">
          <ul className="overflow-x-auto whitespace-nowrap">
            <li className="survey inline-block px-8 py-5 bg-blue-700 rounded-lg">
              <div>
                <div className="flex justify-center">
                  <PieChart
                    // your data
                    data={myData}
                    // width and height of the view box
                    viewBoxSize={[150, 150]}
                    startAngle={-90}
                  />
                </div>
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
                <div className="flex justify-center">

                </div>
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
                <div className="flex justify-center">

                </div>
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