import React from "react";
import styles from './greet.module.css';
import image from '../../resources/greet/greet_img.svg';

export default () => {
    return (
        <div className={styles.greet}>
            <div className={styles.header}>
                <p className={styles.greeteng_text}>Функциональное питание для котов</p>
                <p className={styles.slogan}>занялся собой? займись котом!</p>
            </div>
            <div className={styles.image}>
                <img src={image} />
            </div>
            <button className={styles.choose_program_button}>подобрать программу</button>
        </div>
    );
};