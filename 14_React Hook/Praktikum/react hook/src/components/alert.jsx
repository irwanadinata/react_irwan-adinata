import React, { useEffect } from 'react';

const Alert = ({ showAlert }) => {
  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  }, [showAlert]);

  return showAlert ? <div className="alert">Welcome</div> : null;
};

export default Alert;