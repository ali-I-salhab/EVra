import React, { ReactNode } from "react";
interface AlertProps {
  children: ReactNode;
  onClose: () => void;
}
function Alert(props: AlertProps) {
  return (
    <div className="alert alert-primary alert-dismissible" role="alert">
      {props.children}
      <button
        type="button"
        onClick={props.onClose}
        className="btn-close"
      ></button>
    </div>
  );
}

export default Alert;
