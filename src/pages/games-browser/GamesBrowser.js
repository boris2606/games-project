import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import styles from './GamesBrowser.module.scss'

const GamesBrowser = () => {

    const dataGamesBrowser = useSelector(state => state.toolkit.dataGamesBrowser)
    let currentUrl = window.location.pathname

    let arrCategories = []

    dataGamesBrowser.forEach(game => {
        arrCategories.push(game.genre)
    });

    const [genre, setGenre] = useState('All')

    return (
        <div className={styles.wrapper_browser_games}>
            <Header/>
            <div className={styles.browser_games_head_block} data-aos="fade-right" data-aos-duration="1000">
                <p className={styles.browser_games_head_tit_text}>Finde <span>your favorite browser game</span></p>
            </div>
            <div className={styles.select_genre_browser_game} data-aos="zoom-in" data-aos-duration="1000">
                <p className={styles.select_tit_text}>Choose genre</p>
                <select onChange={(e) => setGenre(e.target.value)} className={styles.broser_games_select}>
                    <option> All </option>
                    {[...new Set(arrCategories)].map((genre,index) => {
                        return <option key={index}>
                            {genre}
                        </option>
                    })}
                </select>
            </div>
            <hr noshade='true' className={styles.games_hr}/>
            <div className={styles.wrapper_browser_games_content}>
                {dataGamesBrowser.map(game => {
                    if (game.genre === genre){
                        return <Link to={currentUrl + '/' + game.title.toLowerCase()} key={game.id} className={styles.game_box}>
                                    <img src={game.thumbnail} alt={game.title}/>
                                    <p className={styles.game_tit_name}>{game.title}</p>
                                    <div className={styles.sub_info_game_box}>
                                        <p className={styles.category_game_box}>{game.genre.toUpperCase()}</p>
                                        {game.platform.trim().toLowerCase().includes('pc') ? 
                                            <span className="material-symbols-outlined">desktop_windows</span> : 
                                            <span className="material-symbols-outlined">web_asset</span>
                                        }
                                    </div>
                                </Link>
                    } else if (genre === 'All'){
                        return <Link to={currentUrl + '/' + game.title.toLowerCase()} key={game.id} className={styles.game_box}>
                                <img src={game.thumbnail} alt={game.title}/>
                                <p className={styles.game_tit_name}>{game.title}</p>
                                <div className={styles.sub_info_game_box}>
                                    <p className={styles.category_game_box}>{game.genre.toUpperCase()}</p>
                                    {game.platform.trim().toLowerCase().includes('pc') ? 
                                        <span className="material-symbols-outlined">desktop_windows</span> : 
                                        <span className="material-symbols-outlined">web_asset</span>
                                    }
                                </div>
                            </Link>
                    }
                })}
            </div>
            <Footer/>
        </div>
    );
};

export default GamesBrowser;