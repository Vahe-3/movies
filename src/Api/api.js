import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export const findMovies = (movieName, type="all") => {
    return axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}=${movieName}${type !== "all" ?  `&type=${type}` : ""}`);
}