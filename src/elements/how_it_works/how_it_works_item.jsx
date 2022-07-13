import React from "react";
import styles from './how_it_works_item.module.css';

export default ({ items }) => {
    return (
        <div className={styles.how_it_works}>
            <p className={styles.header}>Как это работает</p>
            <div className={styles.items}>
                {
                    items.map((item, i) => {
                        return (
                            <div key={i} className={styles.item}>
                                <div className={styles.icon}>
                                    <img className={styles.image} src={item.icon} />
                                </div>
                                <div className={styles.description}>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};