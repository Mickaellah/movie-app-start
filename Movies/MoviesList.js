// import { useState } from "react"
import React, { useState, useEffect } from 'react'
import Movie from "./Movies";
import Filter from "../pages/Filter";

// const movies = [
//     {
//         name: "36th Chamber"
//     },
//     {
//         name: "5 Deadly Venoms"
//     },
//     {
//         name: "Man of Iron"
//     }
// ]

const API_URL = 'https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&api_key=';
const CONFIG_URL = 'https://api.themoviedb.org/3/configuration?api_key=';

export function MoviesList() {
    console.log(process.env.MOVIE_API);
    const [ filter, setFilter ] = useState("");
    const [ movies, setMovies ] = useState([]);
    const [ config, setConfig ] = useState({});

    const getMovies = async () => {
        try {
            const res = await fetch(API_URL + process.env.MOVIE_API);
            const data = await res.json();
            setMovies(data.results);
        } catch (e) {
            console.error(e);
        }
    }

    const getConfig = async () => {
        try {
            const res = await fetch(CONFIG_URL + process.env.MOVIE_API);
            const config = await res.json();
            setConfig(config);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        getMovies();
        getConfig();
    }, [])

    return (
        <div>
            <Filter filter={filter} setFilter={setFilter} />
            <ul className="movies_list">
                { movies.filter((movie) => {
                    return movie.title.toLowerCase().includes(filter.toLowerCase());
                }).map((movie) => {
                    return (
                        <Movie key={movie.id} config={config} movie={movie}/>
                    )
                }) }
            </ul>
        </div>
    )
}