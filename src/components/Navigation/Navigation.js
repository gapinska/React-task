import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Navigation.module.scss';

const Navigation = () => (
    <nav>
    <ul className={styles.wrapper}>
        <li className={styles.navigationItem}><NavLink exact activeClassName= {styles.navigationItemLinkActive} className={styles.navigationItemLink} to="/">twitters</NavLink></li>
        <li className={styles.navigationItem}><NavLink activeClassName= {styles.navigationItemLinkActive} className={styles.navigationItemLink} to="/articles">articles</NavLink></li>
        <li className={styles.navigationItem}><NavLink activeClassName= {styles.navigationItemLinkActive} className={styles.navigationItemLink} to="/notes">notes</NavLink></li>
    </ul>
    </nav>
);

export default Navigation;