import React, { useEffect } from "react";

const Alert = ({ showAlert, message }) => {
  return showAlert ? (
    <div className="alert alert-success text-center">{message}</div>
  ) : null;
};

export default Alert;
