import React from "react";
import styles from "./Button.module.css";
interface ButtonProps {
  text: String;
  color?: "primary" | "secondary" | "danger";
  onClick: (classname: String) => void;
}
function Button({ color = "primary", text, onClick }: ButtonProps) {
  let classname = "btn btn-" + color;
  return (
    <button
      type="button"
      onClick={() => onClick(classname)}
      className={[styles.btn, styles["btn-primary"]].join(" ")}
    >
      {text}
    </button>
  );
}

export default Button;
