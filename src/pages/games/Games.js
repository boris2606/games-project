import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import styles from './Games.module.scss'

const Games = () => {
    const categories = useSelector(state => state.toolkit.dataGamesCategories)
    
    return (
        <section className={styles.wrapper_games}>
            <Header/>
            <div className={styles.games_head_block} data-aos="fade-right" data-aos-duration="1000">
                <p className={styles.games_head_tit_text}>Finde <span>your favorite game</span></p>
            </div>
            <p className={styles.game_categories_tit} data-aos="zoom-in" data-aos-duration="1000">Choose your <span>category</span></p>
            <hr noshade='true' className={styles.games_hr}/>
            <div className={styles.game_categories_wrapper}>
                {categories.map( (category,index) => {
                    return <Link data-aos="zoom-in" key={index} to={'/games/' + category.toLowerCase()} className={styles.category_block}>{category}</Link>
                })}
            </div>
            <Footer/>
        </section>
    );
};

export default Games;