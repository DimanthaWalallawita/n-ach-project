import React from 'react'
import styles from "../assets/css/NavBar.module.css"

const NavBar = ({ onToggleUsersList, showUsers }) => {
    return (
        <nav className={styles.navBar}>
            <h1>User Details</h1>
            <button className={styles.button} onClick={onToggleUsersList}>
                {showUsers ? "Hide Users" : "Load Users"}
            </button>
        </nav>
    )
}

export default NavBar