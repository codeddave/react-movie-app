import React, { Component } from "react";
import { apiUrl, apiKey } from "../../api";
import Navigation from "../Navigation/Navigation";
import MovieInfo from "../MovieInfo/MovieInfo";
import MovieInfoBar from "../MovieInfoBar/MovieInfoBar";
import Actor from "../Actor/Actor";
import Spinner from "../Spinner/Spinner";
import axios from "axios";

/*import "./Movie.css";*/
class Movie extends Component {
  state = {
    movie: null,
    actors: null,
    directors: [],
    loading: false,
  };
  componentDidMount() {
    this.setState({
      loading: true,
    });
    const endpoint = `${apiUrl}movie/${this.props.match.params.movieId}?api_key=${apiKey}&language=en-US`;
    this.fetchItems(endpoint);
  }

  fetchItems = async (endpoint) => {
    const res = await axios.get(endpoint);
    const response = res.data;
    console.log(response);

    if (response.status_code) {
      this.setState({
        loading: false,
      });
    } else {
      this.setState({ movie: response }, async () => {
        // fetching actors in the callback function
        const endpoint = `${apiUrl}movie/${this.props.match.params.movieId}/credits?api_key=${apiKey}`;

        try {
          const res = await axios.get(endpoint);
          const response = res.data;
          console.log(response);

          const directors = response.crew.filter(
            (member) => member.job === "Director"
          );

          this.setState({
            actors: response.cast,
            loading: false,
            directors: directors,
          });
        } catch (error) {
          console.log(error);
        }
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.movie ? (
          <div>
            <Navigation movie={this.props.location.movieName} />
            <MovieInfo
              movie={this.state.movie}
              directors={this.state.directors}
            />
            <MovieInfoBar
              time={this.state.movie.runtime}
              budget={this.state.movie.budget}
              revenue={this.state.movie.revenue}
            />
            {this.state.actors ? <Actor actors={this.state.actors} /> : null}
            {!this.state.actors && !this.state.loading ? (
              <h3>No Movie Found</h3>
            ) : null}

            {this.state.loading ? <Spinner /> : null}
          </div>
        ) : null}
      </div>
    );
  }
}
export default Movie;
