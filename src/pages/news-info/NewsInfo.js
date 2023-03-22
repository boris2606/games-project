import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import styles from './NewsInfo.module.scss'
import parse from 'html-react-parser';

const NewsInfo = () => {
    let {newsId} = useParams()

    const dataNews = useSelector(state => state.toolkit.dataNews)

    return (
        <div className={styles.wrapper_news_info}>
            <Header/>
            <div className={styles.head_news_info} data-aos="fade-right" data-aos-duration="1000">
                <p className={styles.head_news_info_tit}>Latest news <span> only for you </span> </p>
            </div>
            <div className={styles.news_info_content}>
                {dataNews.map(news => {
                    if (news.id === +newsId){
                        return <div className={styles.news_info_box} key={news.id}>
                                    <p className={styles.box_tit_text} data-aos="zoom-in" data-aos-duration="1000">{news.title}</p>
                                    <hr noshade='true' className={styles.news_hr}/>
                                    {parse(news.article_content)}
                                </div>
                    }
                })}
            </div>
            <Footer/>
        </div>
    );
};

export default NewsInfo;