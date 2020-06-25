import React from "react";
import "./SliderMovies.scss";

import Loading from "../Loading";

import { Carousel, Button } from "antd";
import { Link } from "react-router-dom";

export default function SliderMovies({ movies }) {
  if (movies.loading || !movies.result) {
    return <Loading />;
  }

  const { results } = movies.result;
  return (
    <Carousel autoplay className="slider-movies">
      {results.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </Carousel>
  );
}

function Movie({ movie: { id, backdrop_path, title, overview } }) {
  const backdropPath = `https://image.tmdb.org/t/p/original${backdrop_path}`;

  return (
    <div
      className="slider-movies_movie"
      style={{ backgroundImage: `url('${backdropPath}')` }}
    >
      <div className="slider-movies_movie-info">
        <div>
          <h2>{title}</h2>
          <p>{overview}</p>
          <Link to={`/movie/${id}`}>
            <Button type="primary">Ver más</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
