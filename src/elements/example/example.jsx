import React, { useState } from "react";
import styles from './example.module.css';
import fatCat from '../../resources/example/fat_cat.svg';
import slimCat from '../../resources/example/slim_cat.png';
import Toggle from '../toggle/toggle';

export default () => {
    const [selector, setSelector] = useState(false);
    const toggle = () => setSelector(prev => !prev);

    return (
        <div className={styles.example}>
            <h1 className={styles.header}>Живой пример</h1>
            <div className={styles.text}>
                Борис сбросил 5 кг за 2 месяца, просто заменив свой обычный корм на Cat Energy Slim. Отличный результат без изнуряющих тренировок! При этом он не менял своих привычек и по-прежнему спит по 16 часов в день.
            </div>
            <div className={styles.parameters}>
                <div className={styles.item}>
                    <p className={styles.value}>5 кг</p>
                    <p className={styles.label}>снижение <br /> веса</p>
                </div>
                <div className={styles.item}>
                    <p className={styles.value}>60 дней</p>
                    <p className={styles.label}>затрачено <br /> времени</p>
                </div>
            </div>
            <p className={styles.cost}>затраты на питание: 15 000 руб.</p>
            <div className={styles.photo}>
                {
                    selector
                        ? <img className={styles.image} src={slimCat} />
                        : <img className={styles.image} src={fatCat} />
                }
            </div>
            <Toggle
            onClick={toggle}
            lLabel='было'
            rLabel='стало'
            value={selector} />
        </div>
    )
}