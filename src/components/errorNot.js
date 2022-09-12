import Toast from "react-bootstrap/Toast";
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
const ErrorNot = (Props) => {
  return (
    <Toast>
      <Toast.Header>
        <strong className="me-auto">Error!</strong>
      </Toast.Header>
      <Toast.Body>{Props.message}</Toast.Body>
    </Toast>
  );
};

export default ErrorNot;
