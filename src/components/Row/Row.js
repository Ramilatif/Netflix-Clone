import React, { useState, useEffect } from "react";
import tmdbApiClient from "../../api/TMDBApiClient";

const base_url = "https://api.themoviedb.org/t/p/original"


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

                {movies.map(movie =>( <img src={`${base_url}${movie.poster_path}`} alt={movie.name}/>
                ))}

            </div>
        </div>
    )
    
}

export default Row