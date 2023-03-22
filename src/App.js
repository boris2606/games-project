import { Route, Routes } from 'react-router-dom';
import Games from './pages/games/Games';
import Main from './pages/main/Main';
import React, { useCallback, useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { getDataGameList,getDataGamesCategories,getDataGamesPlatformst } from './reduxToolkit/reduxReducer';
import axios from 'axios';
import CategoryPage from './pages/category-page/CategoryPage';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GameInfo from './pages/game-info/GameInfo';
import GamesBrowser from './pages/games-browser/GamesBrowser';
import GamePc from './pages/game-pc/GamePc';
import News from './pages/news/News';
import NewsInfo from './pages/news-info/NewsInfo';
import Giveaways from './pages/giveaways/Giveaways';
import Error from './pages/error/Error';

function App() {
    const dispatch = useDispatch()

    const getGamesData = useCallback( async () => {
        const {data} = await axios.get('/games',{
            headers: {
                'X-RapidAPI-Key': '604af9e33fmsheed7b81fe26d09ap1759f2jsn4e68369d2cbd',
                'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
            }
        })

        let categories = []
        let platform = []
  
        data.forEach(game => {
            categories.push(game.genre);
            platform.push(game.platform);
        })
  
        dispatch(getDataGameList(data))
        dispatch(getDataGamesCategories([...new Set(categories)]))
        dispatch(getDataGamesPlatformst([...new Set(platform)]))

    },[dispatch])
    
    useEffect(()=>{
        AOS.init();
        getGamesData()
    },[getGamesData])


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/games' element={<Games/>} />
        <Route path='/games/:category' element={<CategoryPage/>} />
        <Route path='/games/:category/:gameInfo' element={<GameInfo/>} />
        <Route path='/browser-games' element={<GamesBrowser/>} />
        <Route path='/browser-games/:gameInfo' element={<GameInfo/>} />
        <Route path='/pc-games' element={<GamePc/>} />
        <Route path='/pc-games/:gameInfo' element={<GameInfo/>} />
        <Route path='/news' element={<News/>} />
        <Route path='/news/:newsId' element={<NewsInfo/>} />
        <Route path='/giveaways' element={<Giveaways/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
