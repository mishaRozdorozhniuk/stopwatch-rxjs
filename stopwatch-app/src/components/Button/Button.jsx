import React from 'react';
import PropTypes from "prop-types";
import './Button.css'

const Button = ({className, onClick, text, onDoubleClick}) => {
  return (
    <button className={className} onClick={onClick} onDoubleClick={onDoubleClick}>{text}</button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
  doubleClick: PropTypes.func
}

export default Button;