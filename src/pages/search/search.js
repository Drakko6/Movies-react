import React, { useState, useEffect } from "react";
import { Row, Col, Input } from "antd";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import MovieCatalog from "../../components/MovieCatalog";
import Footer from "../../components/Footer";
import { URL_API, API } from "../../utils/constants";

import "./search.scss";

function Search({ location, history }) {
  const [movieList, setMovieList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const onChangeSearch = (e) => {
    const urlParams = queryString.parse(location.search);
    urlParams.s = e.target.value;
    history.push(`?${queryString.stringify(urlParams)}`);
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    (async () => {
      const searchValue = queryString.parseUrl(location.search);
      const { s } = searchValue.query;
      if (s) {
        const response = await fetch(
          `${URL_API}/search/movie?api_key=${API}&language=es-MX&query=${s}&page=1`
        );
        const movies = await response.json();
        setSearchValue(s);
        setMovieList(movies);
      }
    })();
  }, [location.search]);

  return (
    <Row>
      <Row span={12} offset={6} className="search">
        <h1>Buscar películas</h1>
        <Input value={searchValue} onChange={onChangeSearch} />
      </Row>
      {movieList.results && (
        <Row>
          <MovieCatalog movies={movieList} />
        </Row>
      )}
      <Col span={24}>
        <Footer />
      </Col>
    </Row>
  );
}

export default withRouter(Search);
