import React, { useState, useEffect } from "react";
import tmdbApiClient from "../../api/TMDBApiClient";



function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);
    useEffect(() =>{
        async function fetchData(){
        const request = await tmdbApiClient.get(fetchUrl);
    
        setMovies(request.data.results);
        return request;
        
        }
        fetchData()
        }, [fetchUrl]);
        
        console.table(movies);

    return(
        <div className="row">
        <h2>{title}</h2>

        <div className="row_posters">
        {/*several row_posters */}

        {movies.map(movie =>( <img src={movie.poster_path} alt={movie.name}/>
        ))}

        </div>
        {/* container -> posters*/}
        
        </div>
    )
    
}

export default Row