import React from "react";
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
      className={classname}
    >
      {text}
    </button>
  );
}

export default Button;
