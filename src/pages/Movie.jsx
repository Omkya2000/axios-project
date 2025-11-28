/* eslint-disable react-hooks/set-state-in-effect */
import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

function Movie() {
  const [data, setData] = useState([]);

  const API = "https://www.omdbapi.com/?apikey=1c12799f&s=titanic&page=1";

  const getMovieData = async () => {
    try {
      const res = await axios.get(API);
      console.log(res);
      setData(res.data?.Search || []); // safe handling
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <ul
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        listStyle: "none",
        padding: 0,
        justifyContent: "center",
      }}
    >
      {data?.map((m) => (
        <MovieCard key={m.imdbID} movieData={m} />
      ))}
    </ul>
  );
}

export default Movie;
