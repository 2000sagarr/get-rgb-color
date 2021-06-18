import React from "react";
import style from "./ColorFrom.module.css";
import Input from "./input";
import useInput from "../hooks/use-input";

const ColorForm = (props) => {
  const {
    value: redValue,
    inputChangeHandler: redInputChangeHandler,
    resetValue: redResetValue,
  } = useInput();

  const {
    value: greenValue,
    inputChangeHandler: greenInputChangeHandler,
    resetValue: greenResetValue,
  } = useInput();

  const {
    value: blueValue,
    inputChangeHandler: blueInputChangeHandler,
    resetValue: blueResetValue,
  } = useInput();



  const onSubmit = (event) => {
    event.preventDefault();
    if(redValue === "" || greenValue === "" || blueValue === ""){
      return;
    }
    props.getColor(redValue, greenValue, blueValue);

    redResetValue();
    greenResetValue();
    blueResetValue();
  };

  return (
    <form className={style.form} onSubmit={onSubmit}>
      <Input label="Red" onChange={redInputChangeHandler} value={redValue}/>
      <Input label="Green" onChange={greenInputChangeHandler} value={greenValue} />
      <Input label="Blue" onChange={blueInputChangeHandler} value={blueValue} />
      <button type="submit">COLOR</button>
    </form>
  );
};

export default ColorForm;
