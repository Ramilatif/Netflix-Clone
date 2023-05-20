import React, { useState, useEffect } from "react";
import tmdbApiClient from "../../api/TMDBApiClient";
import requests from "../../api/Requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await tmdbApiClient.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  });
  console.log(movie);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner_buttons">
          <button className="bannerbuton">Play</button>
          <button className="bannerbuton">My List</button>
        </div>
        <h1 className="banner_description">{movie?.overview}</h1>
      </div>
    </header>
  );
}

export default Banner;
