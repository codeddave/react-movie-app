import React, { Component } from "react";
import Hero from "../Hero/Hero";
import SearchBar from "../SearchBar/SearchBar";
import MoviesGrid from "../MoviesGrid/MoviesGrid";
import MovieThumbnail from "../MovieThumbnail/MovieThumbnail";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Spinner from "../Spinner/Spinner";
import axios from "axios";
import {
  apiUrl,
  apiKey,
  imageBaseUrl,
  backdropSize,
  posterSize,
} from "../../api";

import "./Home.css";

class Home extends Component {
  state = {
    movies: [],
    heroImage: null,
    currentPage: 0,
    loading: false,
    searchTerm: "",
    totalPages: 0,
  };

  componentDidMount() {
    const endpoint = `${apiUrl}movie/popular?api_key=${apiKey}&language=en-US&page=1`;
    this.setState({
      loading: true,
    });
    this.getItems(endpoint);
  }

  searchItems = (searchTerm) => {
    console.log(searchTerm);
    let endpoint = "";
    this.setState({
      movies: [],
      searchTerm: searchTerm,
      loading: true,
    });
    if (searchTerm === "") {
      endpoint = `${apiUrl}movie/popular?api_key=${apiKey}&language=en-US&page=1`;
    } else {
      endpoint = `${apiUrl}search/movie?api_key=${apiKey}&language=en-US&query=${searchTerm}`;
    }
    this.getItems(endpoint);
  };

  loadMoreItems = () => {
    let endpoint = "";
    this.setState({
      loading: true,
    });

    if (this.state.searchTerm === "") {
      endpoint = `${apiUrl}movie/popular?api_key=${apiKey}&language=en-US&page=${
        this.state.currentPage + 1
      }`;
    } else {
      endpoint = `${apiUrl}search/movie?api_key=${apiKey}&language=en-US&query=${
        this.state.searchTerm
      }&page=${this.state.currentPage + 1}`;
    }
    this.getItems(endpoint);
  };

  getItems = async (endpoint) => {
    const res = await axios.get(endpoint);

    const response = res.data;
    console.log(response);
    this.setState({
      movies: [...this.state.movies, ...response.results],
      heroImage: this.state.heroImage || response.results[3],
      loading: false,
      currentPage: response.page,
      totalPages: response.total_pages,
    });
  };

  render() {
    return (
      <div className="home">
        {this.state.heroImage ? (
          <div>
            <Hero
              image={`${imageBaseUrl}${backdropSize}${this.state.heroImage.backdrop_path}`}
              title={[this.state.heroImage.original_title]}
              text={this.state.heroImage.overview}
            />
            <SearchBar callback={this.searchItems} />
          </div>
        ) : null}

        <MoviesGrid />
        <MovieThumbnail
          header={this.state.searchTerm ? "Search Result" : "Popular Movies "}
          movies={this.state.movies}
          loading={this.state.loading}
        />
        {this.state.loading ? <Spinner /> : null}

        {this.state.currentPage <= this.state.totalPages &&
        !this.state.loading ? (
          <LoadMoreBtn onClick={this.loadMoreItems} />
        ) : null}
      </div>
    );
  }
}
export default Home;
