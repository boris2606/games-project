import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import { Link, redirect, useParams } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Pagination from '../../components/pagination/Pagination';
import styles from './CategoryPage.module.scss'

const CategoryPage = () => {
    let {category} = useParams()

    let currentUrl = window.location.pathname

    const dataGames = useSelector(state => state.toolkit.dataGamesList)
    const categoryFilteredArr = dataGames.filter(game => game.genre.toLowerCase() === category)
    
    const [currentPageGame,setCurrentPageGame] = useState(1)
    const [gamesPerPage] = useState(10)

    let currentGames = takeCurrentElementFromArray(currentPageGame,gamesPerPage,categoryFilteredArr)

    function takeCurrentElementFromArray(curentPage,elementPerPage,elementsArray){
        const lastElementIndex = curentPage * elementPerPage
        const firstElementIndex = lastElementIndex - gamesPerPage
        return elementsArray.slice(firstElementIndex,lastElementIndex)
    }

    const paginateGames = pageNumber => setCurrentPageGame(pageNumber)

    return (
        <div className={styles.category_games_wrapper}>
            <Header/>
            <div className={styles.category_game_head}>
                <p className={styles.category_game_head_title} data-aos="fade-right" data-aos-duration="1000">{category.toUpperCase()} <span>games</span></p>
            </div>
            <p className={styles.game_category_tit} data-aos="zoom-in" data-aos-duration="1000">Choose your <span>game</span></p>
            <hr noshade='true' className={styles.games_hr}/>
            <div className={styles.category_games_content}>
                {currentGames.map(game => {
                    return <Link to={currentUrl + '/' + game.title.toLowerCase()} key={game.id} className={styles.game_box}>
                        <img src={game.thumbnail} alt={game.title}/>
                        <p className={styles.game_tit_name}>{game.title}</p>
                        <div className={styles.sub_info_game_box}>
                            <p className={styles.category_game_box}>{category.toUpperCase()}</p>
                            {game.platform.trim().toLowerCase().includes('pc') ? 
                                <span className="material-symbols-outlined">desktop_windows</span> : 
                                <span className="material-symbols-outlined">web_asset</span>
                            }
                        </div>
                    </Link>
                })}
            </div>
            <div className={styles.pagination_wrapper}>
                <Pagination arrayElements={categoryFilteredArr} elementPerPage={gamesPerPage} paginate={paginateGames}/>
            </div>
            <Footer/>
        </div>
    );
};

export default CategoryPage;