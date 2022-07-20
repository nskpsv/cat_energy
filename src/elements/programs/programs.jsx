import React from "react";
import styles from './../../styles/css/programs.module.css';
import arrow from '../../resources/programs/arrow.svg';

export default ({ programs }) => {

    return (
        <div className={styles.container}>
            {
                Object.keys(programs).map(program => {
                    const item = programs[program];
                    return (
                        <div key={item.id} className={styles.program}>
                            <div className={styles.header}>
                                <div>
                                    <img src={item.icon} />
                                </div>
                                <p>{item.header}</p>
                            </div>
                            <div className={styles.description}>
                                <p>{item.description}</p>
                            </div>
                            <a href={item.link.path} className={styles.link}>
                                <span>{item.link.text}</span>
                                <div className={styles.arrow} src={arrow} />
                            </a>
                        </div>
                    )
                })
            }
        </div>
    );
};