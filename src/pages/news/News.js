import React, { useCallback, useEffect,useState } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import axios from 'axios';
import { useDispatch, useSelector} from 'react-redux';
import { getNews } from '../../reduxToolkit/reduxReducer';
import styles from './News.module.scss'
import Pagination from '../../components/pagination/Pagination';
import { Link } from 'react-router-dom';


const News = () => {
    const dataNews = useSelector(state => state.toolkit.dataNews)
    const dispatch = useDispatch()
    let currentUrl = window.location.pathname

    const getGamesData = useCallback( async () => {
        const {data} = await axios.get('/latestnews',{
            headers: {
                'X-RapidAPI-Key': '604af9e33fmsheed7b81fe26d09ap1759f2jsn4e68369d2cbd',
                'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
            }
        })
        dispatch(getNews(data))
    },[dispatch])

    const [currentPageNews,setCurrentPageNews] = useState(1)
    const [newsPerPage] = useState(10)

    let currentGames = takeCurrentElementFromArray(currentPageNews,newsPerPage,dataNews)

    function takeCurrentElementFromArray(curentPage,elementPerPage,elementsArray){
        const lastElementIndex = curentPage * elementPerPage
        const firstElementIndex = lastElementIndex - newsPerPage
        return elementsArray.slice(firstElementIndex,lastElementIndex)
    }

    const paginateGames = pageNumber => setCurrentPageNews(pageNumber)

    useEffect(()=>{
        getGamesData()
    },[getGamesData])

    return (
        <div className={styles.wrapper_news}>
            <Header/>
            <div className={styles.news_head_block} data-aos="fade-right" data-aos-duration="1000">
                <p className={styles.news_head_tit_text}>Latest <span>news</span></p>
            </div>
            <hr noshade='true' className={styles.news_hr}/>
            <div className={styles.news_content}>
                {currentGames.map(news => {
                    return <Link key={news.id} to={currentUrl + '/' + news.id} className={styles.news_box}>
                                <div className={styles.news_box_img}>
                                    <img src={news.thumbnail} alt="News img"/>
                                </div>
                                <div className={styles.news_box_descr}>
                                    <p className={styles.news_box_tit_txt}>{news.title}</p>
                                    <p className={styles.news_box_descr_txt}>{news.short_description}</p>
                                </div>
                            </Link>
                })}
            </div>  
            <Pagination arrayElements={dataNews} elementPerPage={newsPerPage} paginate={paginateGames}/>
            <Footer/>
        </div>
    );
};

export default News;