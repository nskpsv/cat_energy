import React from "react";
import styles from '../../styles/css/menu.module.css';
import menuIcon from '../../resources/header/Logo_menu.svg';

const Menu = () => {

    return (
        <div className={styles.container}>
            <nav className={styles.menu}>
                <a className={`${styles.item} ${styles.active}`} >главная</a>
                <a className={styles.item} >каталог продукции</a>
                <a className={styles.item} >подбор программы</a>
            </nav>
            <div className={styles.icon}>
                <img src={menuIcon} />
            </div>
        </div>
    );
}

export default Menu;