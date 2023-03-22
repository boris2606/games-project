import React from 'react';
import styles from './Header.module.scss'
import { headerNav } from '../header-navigation' 
import { Link } from 'react-router-dom';
import BurgerMenu from '../burger-menu/BurgerMenu';

const Header = () => {

    return (
        <header className={styles.wrapper_header}>
            <div className={styles.header_content}>
                <div className={styles.burger_wrapper}>
                    <BurgerMenu/>
                </div>
                <Link className={styles.header_logo} to='/'>GAME<span>Finder</span></Link>
                <ul className={styles.header_navigation_content}>
                    {headerNav.map((elem,index) => {
                        return <li key={index}>
                            <Link to={elem.path}>{elem.name}</Link>
                        </li>
                    })}
                </ul>
            </div>
        </header>
        
    );
};

export default Header;