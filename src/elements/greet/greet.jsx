import React from "react";
import styles from './../../styles/css/greet.module.css';
import image from '../../resources/greet/greet_img.svg';

export default () => {
    return (
        <div className={styles.greet}>
            <div className={styles.header}>
                <p className={styles.greeteng_text}>Функциональное <br/> питание для котов</p>
                <p className={styles.slogan}>занялся собой? займись котом!</p>
                <button className={styles.choose_program_button}>подобрать программу</button>
            </div>
            <div className={styles.image}>
                <img src={image} />
            </div>
        </div>
    );
};