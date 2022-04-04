import axios from "axios";

export const findMovies = (movieName, type="all") => {
    return axios.get(`https://www.omdbapi.com/?apikey=a3f64d98&s=${movieName}${type !== "all" ?  `&type=${type}` : ""}`);
}