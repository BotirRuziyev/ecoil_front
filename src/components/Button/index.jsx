import React from "react";
import "./css/button.css";
import { Link } from "react-router-dom";

const Button = ({ text, to }) => {
  return (
    <Link className="button-ecoil" to={to}>
      {text}
    </Link>
  );
};
Button.defaultProps = {
  text: "",
  to: "#",
};

export default Button;
