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

const API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=d26eaf26ff20294542616f68808ce09f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';

export function MoviesList() {
    const [ filter, setFilter ] = useState("");
    const [ movies, setMovies ] = useState([]);

    const getMovies = async () => {
        try {
            const res = await fetch(API_URL);
            const data = await res.json();
            setMovies(data.results);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        getMovies();
    }, [])

    return (
        <div>
            <Filter filter={filter} setFilter={setFilter} />
            <ul>
                { movies.filter((movie) => {
                    return movie.title.toLowerCase().includes(filter.toLowerCase());
                }).map((movie) => {
                    return (
                        <Movie key={movie.id} movie={movie}/>
                    )
                }) }
            </ul>
        </div>
    )
}