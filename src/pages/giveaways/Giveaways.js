import React, {useCallback,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGiveaways } from '../../reduxToolkit/reduxReducer'; 
import { Progress } from '@chakra-ui/react'
import axios from 'axios';
import styles from './Giveaways.module.scss'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';


const Giveaways = () => {
    const dataGiveaways = useSelector(state => state.toolkit.dataGiveaways)
    const dispatch = useDispatch()

    let currentUrl = window.location.pathname

    const getGamesData = useCallback( async () => {
        const {data} = await axios.get('/giveaways',{
            headers: {
                'X-RapidAPI-Key': '604af9e33fmsheed7b81fe26d09ap1759f2jsn4e68369d2cbd',
                'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
            }
        })
        dispatch(getGiveaways(data))
    },[dispatch])

    useEffect(()=>{
        getGamesData()
    },[getGamesData])

    return (
        <div className={styles.wrapper_giveaways}>
            <Header/>
            <div className={styles.head_giveaways_info} data-aos="fade-right" data-aos-duration="1000">
                <p className={styles.head_giveaways_info_tit}>Giveaways </p>
            </div>
            <div className={styles.giveaways_content}>
                {dataGiveaways.map(elem => {
                    return <div className={styles.giveaways_box} key={elem.id}>
                                <div className={styles.giveaways_box_img}>
                                    <img src={elem.main_image} alt={elem.title}/>
                                </div>
                                <div className={styles.giveaways_box_text}>
                                    <p className={styles.giveaways_box_tit}>{elem.title}</p>
                                    <p className={styles.giveaways_box_descr}>{elem.short_description}</p>
                                    <Progress className={styles.progress_giveaways} data-percent={elem.keys_left} value={elem.keys_left ? elem.keys_left.replace('%','') : false} />
                                </div>
                            </div>
                })}
            </div> 
            <Footer/> 
        </div>
    );
};

export default Giveaways;