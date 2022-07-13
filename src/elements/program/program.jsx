import React from "react";
import styles from './program.module.css';
import arrow from '../../resources/program/arrow.svg';

export default ({ programs }) => {

    return (
        Object.keys(programs).map(program => {
            const item = programs[program];
            return (
                <div key={item.id} className={styles.program}>
                    <div className={styles.header}>
                        <img src={item.icon} />
                        <p className={styles.name}>{item.header}</p>
                    </div>
                    <div className={styles.description}>
                        <p>{item.description}</p>
                    </div>
                    <div className={styles.link}>
                        <a href={item.link.path}>{item.link.text}</a>
                        <img className={styles.arrow} src={arrow} />
                    </div>
                </div>
            )
        })
    );
};