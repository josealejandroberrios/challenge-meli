import React from "react";

import "./styles.scss";

const ErrorMessage = ({ message = "Oops! Ha ocurrido un Error." }) => {
  return (
    <div className="page_error">
      <div className="page_error__container">
        <h1 className="page_error__message">{message}</h1>
      </div>
    </div>
  );
};

export default ErrorMessage;
