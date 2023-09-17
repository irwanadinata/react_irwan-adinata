// RandomNumberButton.jsx
import React from "react";

const RandomNumberButton = ({ onClick }) => {
  return (
    <div className="col-12 d-flex justify-content-center mt-4 mb-4">
      <button className="btn btn-secondary" onClick={onClick}>
        Show Random Number
      </button>
    </div>
  );
};

export default RandomNumberButton;
