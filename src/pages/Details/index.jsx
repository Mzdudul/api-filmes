
import { use, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { API_KEY } from "../../config/key";
import {image_path} from "../../config/img";

const Details = () => {
    const { id } = useParams();

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/movie/${id}?api_key=${API_KEY}&language=EN-us&PAGE=1`)
            .then((response) => response.json())
            .then(data => {

                const {title, overview, poster_path, release_date} = data;

                const movie = {
                    id,
                    title,
                    sinopse: overview,
                    image: `${image_path}${poster_path}`,
                    realeaseDate: release_date,
                }
                setMovie(movie);
            })
    }, [id]);




    return (
        <h1>Pagina de deatlhes</h1>
    );
}

export default Details;