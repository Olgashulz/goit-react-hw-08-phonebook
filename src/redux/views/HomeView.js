import React from 'react';
import styles from './HomeView.module.css';




const HomeView = () => (
    <div className={styles.container}>
        <h1 className={styles.title}> Phonebook </h1>
        <span className={styles.subtitle}>
            Please register or log into your account
        </span>
        <div className={styles.phone}>
            <button className={styles.button_orange}>Registation</button>
            <button className={styles.button}>Login</button>


        </div>




    </div>
);

export default HomeView;