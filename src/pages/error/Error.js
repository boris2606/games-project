import React from 'react';
import Header from '../../components/header/Header';
import styles from './Error.module.scss'

const Error = () => {
    return (
        <div className={styles.wrapper_error}>
            <Header/>
        </div>
    );
};

export default Error;