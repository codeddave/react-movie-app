import React from "react";
import { imageBaseUrl, backdropSize, posterSize } from "../../api";

import "./MovieInfo.css";

function MovieInfo(props) {
  return (
    <div>
      <div
        className="movie-background"
        style={{
          background: props.movie.backdrop_path
            ? `url("${imageBaseUrl}${backdropSize}${props.movie.backdrop_path}")`
            : "#000",
        }}
      >
        <div className="row info-content">
          <div className=" col-sm-6 col-lg-4 col-12 image-wrap">
            <img
              className="movie-info-image "
              src={
                props.movie.poster_path
                  ? `${imageBaseUrl}${posterSize}${props.movie.poster_path}`
                  : "./images/no_image.jpg"
              }
              alt=""
            />
          </div>
          <div className=" col-12 col-sm-6 col-lg-8 info-text">
            <h1>{props.movie.title}</h1>
            <h3>PLOT</h3>
            <p>{props.movie.overview}</p>
            <h3>IMDB RATING</h3>
            <div>
              <meter
                min="0"
                max="100"
                optimum="100"
                low="40"
                high="70"
                value={props.movie.vote_average * 10}
              ></meter>
              <p>{props.movie.vote_average}</p>
            </div>
            {props.directors.length > 1 ? (
              <h5>DIRECTORS</h5>
            ) : (
              <h5>DIRECTOR</h5>
            )}
            {props.directors.map((director, i) => (
              <p key={i}>{director.name}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default MovieInfo;
