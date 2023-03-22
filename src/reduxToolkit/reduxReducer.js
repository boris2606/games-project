import { createSlice } from "@reduxjs/toolkit";

let gameInfo = JSON.parse(localStorage.getItem('gameInfo')) || {}
let dataNews = JSON.parse(localStorage.getItem('dataNews')) || []
let dataGiveaways = JSON.parse(localStorage.getItem('dataGiveaways')) || []

const toolkitSlice = createSlice({
    name: 'toolkit',
    initialState: {
        dataGamesList: [],
        dataGamesCategories: [],
        dataGamesPlatforms: [],
        dataGameInfo: gameInfo,
        dataGamesBrowser: [],
        dataGamesPc: [],
        dataNews: dataNews,
        dataGiveaways: dataGiveaways
    },
    reducers: {
        getDataGameList(state,action){
            state.dataGamesList = action.payload
            state.dataGamesBrowser = state.dataGamesList.filter(game => game.platform.includes('Browser'))
            state.dataGamesPc = state.dataGamesList.filter(game => game.platform.includes('PC'))
        },
        getDataGamesCategories(state,action){
            state.dataGamesCategories = action.payload
        },
        getDataGamesPlatformst(state,action){
            state.dataGamesPlatforms = action.payload
        },
        getDataGameInfo(state,action){
            state.dataGameInfo = action.payload
            localStorage.setItem('gameInfo', JSON.stringify(state.dataGameInfo))
        },
        getNews(state,action){
            state.dataNews = action.payload
            localStorage.setItem('dataNews', JSON.stringify(state.dataNews))
        },
        getGiveaways(state,action){
            state.dataGiveaways = action.payload
            localStorage.setItem('dataGiveaways', JSON.stringify(state.dataNews))
        },
    }
})

export default toolkitSlice.reducer
export const {
    getDataGameList,
    getDataGamesCategories,
    getDataGamesPlatformst,
    getDataGameInfo,
    getNews,
    getGiveaways
} = toolkitSlice.actions