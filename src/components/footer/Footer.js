import React from 'react';
import styles from './Footer.module.scss'
import { headerNav } from '../header-navigation';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className={styles.footer_wrapper}>
            <div className={styles.footer_content}>
                <Link className={styles.header_logo} to='/'>GAME<span>Finder</span></Link>
                <div className={styles.footer_navigation}>
                    {headerNav.map((elem,index)=>{
                        return <Link key={index} to={elem.path}>{elem.name}</Link>
                    })}
                </div>
            </div>
        </footer>
    );
};

export default Footer;