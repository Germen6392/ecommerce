import React, { useState } from "react";
import './Button.css';
const Button = () => {
  const [message, setMessage] = useState("Comprar");

  const handleClick = () => {
    setMessage("Gracias por tu Compra");
  };

  return (
    <button onClick={handleClick}>
      {message}
    </button>
  );
};

export default Button;
