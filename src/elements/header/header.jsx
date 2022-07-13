import React from "react";
import styles from './header.module.css';
import logo from '../../resources/header/logo_mobile.svg';
import menuIcon from '../../resources/header/Logo_menu.svg';
import appNameIcon from '../../resources/header/logo_name.svg';

export default () => {
    return (
        <header className={styles.header}>
            <img src={logo} className={styles.logo} />
            <img src={appNameIcon} className={styles.app_name_logo} />
            <img src={menuIcon} className={styles.menu_icon} />
        </header>
    );
};