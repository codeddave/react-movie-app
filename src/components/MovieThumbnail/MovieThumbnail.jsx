import React from "react";
import { Link } from "react-router-dom";
import "./MovieThumbnail.css";
import { imageBaseUrl, posterSize } from "../../api/index";

function MovieThumbnail(props) {
  return (
    <div>
      {props.header && !props.loading ? <h1> {props.header}</h1> : null}
      <div className="row justify-content-center">
        {props.movies.map((movie, i) => (
          <Link
            to={{
              pathname: `/${movie.id}`,
              movieName: `${movie.original_title}`,
            }}
            key={i}
          >
            <div
              key={i}
              className="card mb-4 ml-4 mt-4"
              style={{ width: "24rem", height: "32rem" }}
            >
              <img
                className="card-img-top img-responsive "
                src={
                  movie.poster_path
                    ? `${imageBaseUrl}${posterSize}/${movie.poster_path}`
                    : "./images/no_image.jpg"
                }
                alt="loading"
                style={{ height: "100%" }}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default MovieThumbnail;
//</div><img src={`${imageBaseUrl}${posterSize}/${movie.poster_path}`} />
