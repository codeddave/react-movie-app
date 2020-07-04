import React from "react";
import "./MoviesGrid.css";

function MoviesGrid(props) {
  return (
    <div className="rmdb-grid">
      {props.header && !props.loading ? <h1> {props.header}</h1> : null}
      <div className="rmdb-grid-content"></div>
    </div>
  );
}
export default MoviesGrid;
