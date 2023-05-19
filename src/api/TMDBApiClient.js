import axios from "axios";
//56:30
 const tmdbApiClient = axios.create({
    baseURL: "https://api.themoviedb.org/3",
})

    export default tmdbApiClient;