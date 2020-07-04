import React from "react";
import "./LoadMoreBtn.css";

function LoadMoreBtn(props) {
  return (
    <div>
      <div className="buttton">
        <button
          onClick={props.onClick}
          className="load-btn justify-content-center"
        >
          Load More{" "}
        </button>
      </div>
    </div>
  );
}
export default LoadMoreBtn;
