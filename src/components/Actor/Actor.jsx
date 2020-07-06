import React from "react";
import { imageBaseUrl } from "../../api";
import "./Actor.css";

function Actor(props) {
  const posterSize = "w154";
  return (
    <div>
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
export default Actor;
