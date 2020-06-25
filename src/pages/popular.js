import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { URL_API, API } from "../utils/constants";

//components
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import MovieCatalog from "../components/MovieCatalog";

export default function Popular() {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${URL_API}/movie/popular?api_key=${API}&language=es-MX&page=${page}`
      );

      const movies = await response.json();
      setMovieList(movies);
    })();
  }, [page]);

  const onChangePage = (page) => {
    setPage(page);
  };

  return (
    <Row>
      <Col span="24" style={{ textAlign: "center", marginTop: 25 }}>
        <h1 style={{ fontsSize: 35, fontWeight: "bold" }}>
          Películas Populares
        </h1>
      </Col>
      {movieList.results ? (
        <Row>
          <MovieCatalog movies={movieList} />
          <Col span="24">
            <Pagination
              onChangePage={onChangePage}
              totalItems={movieList.total_results}
              currentPage={movieList.page}
            />
          </Col>
        </Row>
      ) : (
        <Col span="24">
          <Loading />
        </Col>
      )}
      <Col span={24}>
        <Footer />
      </Col>
    </Row>
  );
}
