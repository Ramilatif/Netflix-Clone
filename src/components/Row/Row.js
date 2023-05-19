import React, { useState, useEffect } from "react";
import tmdbApiClient from "../../api/TMDBApiClient";



function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);
    useEffect(() =>{
        async function fetchData(){
        const request = await tmdbApiClient.get(fetchUrl);
        console.log(request);
        return request;
        }
        fetchData()
        }, []);


    return(
        <div>
        <h2>{title}</h2>
        {/* container -> posters*/}
        
        </div>
    )
    
}

export default Row