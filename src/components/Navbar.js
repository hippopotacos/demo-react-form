import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar'

class Navbar extends React.Component {
    render(){
        return(
            <div>
                <div className={styles.nav}>
                    <Link to="/pages/Home">Home</Link>
                    <Link to="/pages/About">About</Link>
                </div>
            </div>
        )
    }
}

export default Navbar;