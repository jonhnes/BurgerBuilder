import React from 'react';

import classes from "./Button.module.css";

const Button = (props) => {
  const buttonClasses = [classes.Button, classes[props.btnType]].join(' ')
  return (
    <button onClick={props.clicked}
            className={buttonClasses}>
      {props.children}
    </button>
  );
};

export default Button;