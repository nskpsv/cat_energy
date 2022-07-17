import React from "react";
import styles from './../../styles/css/toggle.module.css';


export default ({onClick, value, lLabel, rLabel }) => {

    return (
        <div className={styles.selector}>
            <p className={styles.label}>{lLabel}</p>
            <div className={styles.toggle} onClick={onClick}>
                <div className={
                    `${styles.value} ${value && styles.true}`}></div>
            </div>
            <p className={styles.label}>{rLabel}</p>
        </div>
    )
};