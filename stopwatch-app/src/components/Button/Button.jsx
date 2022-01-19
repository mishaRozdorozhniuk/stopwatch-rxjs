import React from 'react';
import PropTypes from "prop-types";
import './Button.css'

const Button = ({className, onClick, text, doubleClick}) => {
  return (
    <button className={className} onClick={onClick} onDoubleClick={doubleClick}>{text}</button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
  doubleClick: PropTypes.func
}

export default Button;