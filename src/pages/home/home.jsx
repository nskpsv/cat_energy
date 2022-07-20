import React from "react";
import styles from '../../styles/css/home.module.css';
import Header from '../../elements/header/header';
import Greet from '../../elements/greet/greet';
import programsData from '../../elements/programs/programs_data';
import Programs from '../../elements/programs/programs';
import HowItem from '../../elements/how_it_works/how_it_works_item';
import howItWorksItems from '../../elements/how_it_works/how_it_works_items';
import Example from '../../elements/example/example';
import Contacts from '../../elements/contacts/contscts';

export const Home = () => {
    return (
        <div className={styles.container}>
            <Header />
            <Greet />
            <Programs programs={programsData} />
            <HowItem items={howItWorksItems} />
            <Example />
            <Contacts />
        </div>
    );
};