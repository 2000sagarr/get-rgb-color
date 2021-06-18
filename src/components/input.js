import React from "react";

const Input = (props) => {
  return (
    <div>
      <label htmlFor="input_label" style={{color : props.label}}>{props.label}</label>
      <input
        type="number"
        id="input_label"
        onChange = {props.onChange}
        value = {props.value}
        style={{color : props.label , border : `2px solid ${props.label}`}}
      />
    </div>
  );
};

export default Input;
