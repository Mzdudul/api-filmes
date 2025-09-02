import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_KEY } from "../../config/key";
import { image_path } from "../../config/img";
import { Container } from "./styles";

const Details = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US&page=1`)
            .then((response) => response.json())
            .then((data) => {
                const { title, overview, poster_path, release_date } = data;

                const movie = {
                    id,
                    title,
                    sinopse: overview,
                    image: `${image_path}${poster_path}`,
                    releaseDate: release_date,
                };

                setMovie(movie);
            });
    }, [id]);

    return (
        <Container>
            <div className="movie-info">
                <img src={movie.image} alt={movie.title} />
                <div className="details">
                    <h1>{movie.title}</h1>
                    <span>Sinopse: {movie.sinopse}</span>
                    <span className="release">Release date: {movie.releaseDate}</span>
                    <Link to="/">
                        <button>Go back</button>
                    </Link>
                </div>
            </div>
        </Container>
    );
};

export default Details;
