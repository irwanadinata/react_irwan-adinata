import React from "react";

const Button = (props) => {
  const { onClick, label, type } = props;
  return (
    <div className="col-12 d-flex justify-content-center mt-4 mb-4">
      <button
        className="btn btn-primary item-center"
        onClick={onClick}
        type={type}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
