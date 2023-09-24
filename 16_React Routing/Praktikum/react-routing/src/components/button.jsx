import React from "react";

const Button = ({ onClick, label }) => {
  return (
    <div className="col-12 d-flex justify-content-center mt-4 mb-4">
      <button className="btn btn-primary item-center" onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default Button;
