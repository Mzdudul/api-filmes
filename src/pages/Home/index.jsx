import React, { use } from "react";
import { Container, Movie, MovieList } from "./styles";
import { useEffect } from "react";
import { useState } from "react";
import { API_KEY } from "../../config/key";
import { Link } from "react-router-dom";
import { image_path } from "../../config/img";

function Home() {
    
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=EN-us&PAGE=1`)
        .then((response) => response.json())
        .then((data) => setMovies(data.results))
    }, []);

    return (
        <Container>
            <h1>Movies</h1>
            <MovieList>
                {movies.map(movie =>{
                    return(
                        <Movie key={movie.id}>
                            <Link to={`/details/${movie.id}`}><img src={`${image_path}${movie.poster_path}`} alt={movie.title} /></Link>
                            <span>{movie.title}</span>
                        </Movie>
                    )
                } )}
                
            </MovieList>
        </Container>
    )
}

export default Home;