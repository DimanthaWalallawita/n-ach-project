import React from 'react'
import styles from "../assets/css/NavBar.module.css"
import { useNavigate } from 'react-router-dom'

const NavBar = () => {

    const navigation = useNavigate();

    const handleNavigation = () => {
        navigation('/');
    }

    return (
        <nav className={styles.navBar}>
            <h1>User Details</h1>
            <button className={styles.button} onClick={handleNavigation}>Home</button>
        </nav>
    )
}

export default NavBar