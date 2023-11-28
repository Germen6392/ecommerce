import React, { useState } from "react";

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
