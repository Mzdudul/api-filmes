import React from "react";
import { Container, Movie, MovieList } from "./styles";
import spiderman from "../Home/img/spiderman.webp"

function Home() {

    const movies = [
        {
            id: 1,
            title: 'Spider Man',
            image_url: spiderman
        },
        {
            id: 2,
            title: 'Spider Man',
            image_url: spiderman
        },
        {
            id: 3,
            title: 'Spider Man',
            image_url: spiderman
        }

    ]

    return (
        <Container>
            <h1>Movies</h1>
            <MovieList>
                {movies.map(movie =>{
                    return(
                        <Movie key={movie.id}>
                            <a href=""><img src={movie.image_url} alt={movie.title} /></a>
                            <span>{movie.title}</span>
                        </Movie>
                    )
                } )}
                
            </MovieList>
        </Container>
    )
}

export default Home;