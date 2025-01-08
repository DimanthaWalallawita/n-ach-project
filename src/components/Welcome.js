import React from 'react'
import WelcomeImg from '../assets/images/welcome.svg';
import styles from '../assets/css/Welcome.module.css';

const Welcome = () => {
    return (
        <div className={styles.welcomeContainer}>
            <img src={WelcomeImg} alt='WelcomeImage'/>
        </div>
    )
}

export default Welcome