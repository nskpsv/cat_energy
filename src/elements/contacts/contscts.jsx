import React from "react";
import styles from './../../styles/css/contacts.module.css';
import logo from '../../resources/header/logo_name.svg';
import vk from '../../resources/contacts/icon_vkontakte.svg';
import fb from '../../resources/contacts/icon_facebook.svg';
import inst from '../../resources/contacts/icon_instagram.svg';

export default () => {
    return (
        <div className={styles.contacts}>
            <div className={styles.header}>
                <p className={styles.message}>приглашаем к сотрудничеству дилеров!</p>
                <p className={styles.address}>ул. Крылова, д. 64/1 <br /> Новосибирск</p>
            </div>
            <div id='map'>
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa885bc21aa76d51d99eb54719c123a8b7b7dbc4600bd349ee36a96ec970350ad&amp;source=constructor" width="100%" height="400" frameBorder="0"></iframe>
            </div>
            <div className={styles.footer}>
            <img className={styles.logo} src={logo} />
                <div className={styles.soсialNetworks}>
                    <a href='https://vk.com'>
                        <img src={vk} />
                    </a>
                    <a href='https://instagramm.com'>
                        <img src={inst} />
                    </a>
                    <a href='https://facebook.com'>
                        <img src={fb} />
                    </a>
                </div>
            </div>
        </div>
    );
}