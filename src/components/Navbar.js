import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar'

class Navbar extends React.Component {
    render(){
        return(
            <div>
                <ul className={styles.nav}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/pages/About">About</Link></li>
                    <li><Link to="/pages/PastTime">PastTime</Link></li>
                    <li><Link to="/pages/Questionnaire">Questionnaire</Link></li>
                    <li><Link to="/pages/Form">Form</Link></li>
                </ul>
            </div>
        )
    }
}

export default Navbar;