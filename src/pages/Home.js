import React from 'react'
import styles from './Home.module.css';

class Home extends React.Component {
  render(){
    return(
      <div>
        <h1 className={styles.heading}>TOP page</h1>
        <h2 className="heading">ここはトップページですね</h2>
      </div>
    )
  }
}

export default Home;