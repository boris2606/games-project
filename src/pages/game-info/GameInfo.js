import React ,{useCallback, useEffect} from 'react';
import parse from 'html-react-parser';
import { useSelector ,useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDataGameInfo } from '../../reduxToolkit/reduxReducer';
import { ImageViewer } from "react-image-viewer-dv"

import axios from 'axios';
import styles from './GameInfo.module.scss'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const GameInfo = () => {
    let {gameInfo} = useParams()
    const dispatch = useDispatch()

    const dataGamesList = useSelector(state => state.toolkit.dataGamesList)
    const dataGameInfo = useSelector(state => state.toolkit.dataGameInfo)
    const currentGameArr = dataGamesList.find(game => game.title.toLowerCase() === gameInfo) || dataGameInfo

    const getGameData = useCallback( async () => {
        const {data} = await axios.get('/game',{
            params: {id: `${currentGameArr.id}`},
            headers: {
                'X-RapidAPI-Key': '604af9e33fmsheed7b81fe26d09ap1759f2jsn4e68369d2cbd',
                'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
            }
        })
        dispatch(getDataGameInfo(data))

    },[dispatch,currentGameArr.id])

    useEffect(()=>{
        getGameData()
    },[getGameData])

    return (
        <div className={styles.wrapper_game_info}>
            <Header/>
            <div className={styles.game_info_head} data-aos="fade-right">
                <p>{gameInfo} <span>game</span></p>
            </div>
            <div className={styles.game_info_content}>
                <div className={styles.game_info_systems_params}>
                    <img src={dataGameInfo.thumbnail} alt='Game about pic'/>
                    <p className={styles.system_param_tit_txt}>Minimum System Requirements:</p>
                    { dataGameInfo.minimum_system_requirements ? 
                        <div className={styles.game_info_system_params}>
                            <p className={styles.system_params_txt}>Platform:  <span>{dataGameInfo.minimum_system_requirements.os}</span></p>
                            <p className={styles.system_params_txt}>Graphics:  <span>{dataGameInfo.minimum_system_requirements.graphics}</span></p>
                            <p className={styles.system_params_txt}>Memory:    <span>{dataGameInfo.minimum_system_requirements.memory}</span></p>
                            <p className={styles.system_params_txt}>Processor: <span>{dataGameInfo.minimum_system_requirements.processor}</span></p>
                            <p className={styles.system_params_txt}>Storage:   <span>{dataGameInfo.minimum_system_requirements.storage}</span></p>
                        </div>
                    : false}
                    <a href={dataGameInfo.game_url} className={styles.game_link} target='_blank' rel='noreferrer'>VISITE SITE</a>
                </div>
                <div className={styles.game_info_descriptio}>
                    {/* <div className={styles.game_info_slider_descr}>
                        {dataGameInfo.screenshots.map(img => {
                            return <ImageViewer key={img.id} className={styles.game_infi_slide}>
                                <img src={img.image}  alt={img.image} />
                            </ImageViewer>
                        })}
                    </div> */}
                    <div className={styles.game_info_description_txt}>
                        {dataGameInfo.description ? parse(dataGameInfo.description) : false}
                    </div>
                    <p className={styles.game_Info_addition_tit}>Additional Information</p>
                    <div className={styles.game_Info_addition_content}>
                        <div className={styles.addition_box}>
                            <p className={styles.addition_tit}>Title</p>
                            <p className={styles.addition_tit_sec}>{dataGameInfo.title}</p>
                        </div>
                        <div className={styles.addition_box}>
                            <p className={styles.addition_tit}>Developer</p>
                            <p className={styles.addition_tit_sec}>{dataGameInfo.developer}</p>
                        </div>
                        <div className={styles.addition_box}>
                            <p className={styles.addition_tit}>Publisher</p>
                            <p className={styles.addition_tit_sec}>{dataGameInfo.publisher}</p>
                        </div>
                        <div className={styles.addition_box}>
                            <p className={styles.addition_tit}>Release Date</p>
                            <p className={styles.addition_tit_sec}>{dataGameInfo.release_date}</p>
                        </div>
                        <div className={styles.addition_box}>
                            <p className={styles.addition_tit}>Genre</p>
                            <p className={styles.addition_tit_sec}>{dataGameInfo.genre}</p>
                        </div>
                        <div className={styles.addition_box}>
                            <p className={styles.addition_tit}>Platform</p>
                            <p className={styles.addition_tit_sec}>{dataGameInfo.platform}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default GameInfo;