//fullstack-interview\components\Button.tsx

import React from "react";

interface ButtonProps {
  type: "next" | "previous" | "cancel" | "submit" | "done";
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ type, onClick, disabled }) => {
  let buttonText = "";
  switch (type) {
    case "next":
      buttonText = "Next";
      break;
    case "previous":
      buttonText = "Previous";
      break;
    case "cancel":
      buttonText = "Cancel";
      break;
    case "submit":
      buttonText = "Submit";
      break;
    case "done":
      buttonText = "Done";
      break;
    default:
      break;
  }

  return (
    <button
      className={`${type}-button`}
      onClick={onClick}
      disabled={disabled ? disabled : false}
    >
      {buttonText}
    </button>
  );
};

export default Button;
