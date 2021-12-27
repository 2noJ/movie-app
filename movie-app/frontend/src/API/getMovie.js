import axios from 'axios'

const API_KEY = '?api_key=b0264b4bae16588c1f053ccb18203df3';
const Language = '&language=ko';
// const impPath = 'https://image.tmdb.org/t/p/'
const URL = 'https://api.themoviedb.org/3/';

async function GET_TREND(){
    try{
        return await axios.get(URL + 'trending/all/day' + API_KEY + Language)
    }
    catch(e){
        console.error(e)
    }
}

async function GET_POPULAR(){
    try{
        return await axios.get(URL + 'movie/popular' + API_KEY + Language)
    }
    catch(e){
        console.error(e)
    }
}

export{
    GET_TREND,
    GET_POPULAR
}