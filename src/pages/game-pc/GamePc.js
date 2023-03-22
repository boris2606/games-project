import React,{useState} from 'react';
import styles from './GamePc.module.scss'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const GamePc = () => {

    const dataGamesPc = useSelector(state => state.toolkit.dataGamesPc)
    let currentUrl = window.location.pathname

    let arrCategories = []

    dataGamesPc.forEach(game => {
        arrCategories.push(game.genre)
    });

    const [genre, setGenre] = useState('All')

    return (
        <div className={styles.wrapper_pc_games}>
            <Header/>
            <div className={styles.pc_games_head_block}>
                <p className={styles.pc_games_head_tit_text} data-aos="fade-right" data-aos-duration="1000">Finde <span>your favorite PC game</span></p>
            </div>
            <div className={styles.select_genre_pc_game} data-aos="zoom-in" data-aos-duration="1000">
                <p className={styles.select_tit_text}>Choose genre</p>
                <select onChange={(e) => setGenre(e.target.value)} className={styles.pc_games_select} >
                    <option> All </option>
                    {[...new Set(arrCategories)].map((genre,index) => {
                        return <option key={index}>
                            {genre}
                        </option>
                    })}
                </select>
            </div>
            <hr noshade='true' className={styles.games_hr}/>
            <div className={styles.wrapper_pc_games_content}>
                {dataGamesPc.map(game => {
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

export default GamePc;