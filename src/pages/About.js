import React from 'react';
import styles from './About.module.css';

class About extends React.Component {
  render(){
    return(
      <div>
        <h1>About</h1>
        <h2 className={styles.subheading}>I am {this.props.name}</h2>
      </div>
    )
  }
}

export default About;