import React from "react";
import { calcTime, convertMoney } from "../../helper.js";
import "./MovieInfoBar.css";

function MovieInfoBar(props) {
  return (
    <div>
      <div className="row text-center mb-4 movie-info-bar pt-4 pb-4">
        <div className="col-sm-4">
          <i className="fas fa-clock mr-2"></i>
          <span>Running Time: {calcTime(props.time)}</span>
        </div>

        <div className="col-sm-4">
          <i className="fas fa-money-bill-alt"></i>
          <span> Budget: {convertMoney(props.budget)} </span>
        </div>
        <div className="col-sm-4">
          <i className="fas fa-money-check-alt mr-2"></i>
          <span>Revenue: {convertMoney(props.revenue)}</span>
        </div>
      </div>
    </div>
  );
}
export default MovieInfoBar;
