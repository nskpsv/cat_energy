import React from "react";
import styles from './../../styles/css/header.module.css';
import logo from '../../resources/header/logo-desktop.svg';
import Menu from '../menu/menu.tsx';

export default () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
            <img src={logo} className={styles.image} />
            <img src='' className={styles.app_name_logo} />
            </div>
            <Menu />
        </header>
    );
};