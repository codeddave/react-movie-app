import React from "react";
import { imageBaseUrl } from "../../api";
import PropTypes from "prop-types";

import "./Actor.css";

function Actor(props) {
  const posterSize = "w154";
  return (
    <div>
      {/*<h4 className="text-center"> Cast </h4>*/}
      <div className="row actor-row">
        {props.actors.map((actor, i) => (
          <div className="actor-general mb-4 ml-4" key={i}>
            <div className="actor-wrap  ">
              <img
                src={
                  actor.profile_path
                    ? `${imageBaseUrl}${posterSize}${actor.profile_path}`
                    : "/images/no_image.jpg"
                }
                alt="actorthumb"
                className="actor-image"
              />
            </div>
            <div className="character ">
              <p>{actor.name}</p>
              <p>{actor.character}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
Actor.propTypes = {
  actors: PropTypes.array,
};
export default Actor;
