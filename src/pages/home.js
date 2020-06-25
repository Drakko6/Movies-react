import React from "react";
import useFetch from "../hooks/useFetch";
import { Row, Col } from "antd";

//constants
import { URL_API, API } from "../utils/constants";
//components
import SliderMovies from "../components/SliderMovies";
import MovieList from "../components/MovieList";
import Footer from "../components/Footer";

export default function Home() {
  const newMovies = useFetch(
    `${URL_API}/movie/now_playing?api_key=${API}&language=es-MX&page=1`
  );
  const popularMovies = useFetch(
    `${URL_API}/movie/popular?api_key=${API}&language=es-MX&page=1`
  );
  const topRatedMovies = useFetch(
    `${URL_API}/movie/top_rated?api_key=${API}&language=es-MX&page=1`
  );

  return (
    <>
      <SliderMovies movies={newMovies} />
      <Row>
        <Col span={12}>
          <MovieList title="Películas Populares" movies={popularMovies} />
        </Col>
        <Col span={12}>
          <MovieList title="Top Mejores Películas" movies={topRatedMovies} />
        </Col>
      </Row>
      <Footer />
    </>
  );
}
