import React from "react";
import { Link } from "react-router-dom";

//import "./Navigation.css"

function Navigation(props) {
  return (
    <div>
      <div>
        <Link to="/">
          <p>Home</p>
        </Link>
        <p>/</p>
        <p>{props.movie}</p>
      </div>
    </div>
  );
}

export default Navigation;
