import React from 'react';
import styles from './Main.module.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from 'react-router-dom';

const Main = () => {

    return (
        <div className={styles.wrapper_main}>
            <Swiper
                direction={"vertical"}
                slidesPerView={1}
                spaceBetween={0}
                mousewheel={true}
                pagination={{
                clickable: true,
                }}
                modules={[Mousewheel, Pagination]}
                className={styles.swiper}
            >
                <SwiperSlide className={styles.swipper_slide}>
                    <div className={styles.slide_info_text}>
                        <p className={styles.slide_tit_text}>GAMES <i className={styles.span_slide}>all categories</i></p>
                        <p className={styles.slide_sec_text}>You can find all games what are you need</p>
                        <Link to='/games' className={styles.slide_link}>SHOW MORE</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swipper_slide + ' ' + styles.flex_right_slide}>
                    <div className={styles.slide_info_text}>
                        <p className={styles.slide_tit_text}><i className={styles.span_slide}>Browser</i> GAMES</p>
                        <p className={styles.slide_sec_text}>Great choice of games for browser</p>
                        <Link to='/browser-games' className={styles.slide_link}>SHOW MORE</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swipper_slide}>
                    <div className={styles.slide_info_text}>
                        <p className={styles.slide_tit_text}>PC <i className={styles.span_slide}>games</i></p>
                        <p className={styles.slide_sec_text}>Great choice of games for PC</p>
                        <Link to='/pc-games' className={styles.slide_link}>SHOW MORE</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swipper_slide + ' ' + styles.flex_right_slide}>
                    <div className={styles.slide_info_text}>
                        <p className={styles.slide_tit_text}><i className={styles.span_slide}>Latest</i>NEWS</p>
                        <p className={styles.slide_sec_text}>Fresh news, get the always latest news</p>
                        <Link to='/news' className={styles.slide_link}>SHOW MORE</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swipper_slide}>
                    <div className={styles.slide_info_text}>
                        <p className={styles.slide_tit_text}>ALL  <i className={styles.span_slide}>Giveaways</i></p>
                        <p className={styles.slide_sec_text}>Get gifts, hurry, an amount limits</p>
                        <Link to='/giveaways' className={styles.slide_link}>SHOW MORE</Link>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Main;