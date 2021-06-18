import {useState} from 'react';

const useInput = () =>{
    const [value, setValue] = useState("");

    const inputChangeHandler = (event) =>{
        const value = event.target.value;
        if(value < 0){
            setValue(0);
        }else
        if(value > 255){
            setValue(255);
        }else{
            setValue(value)
        }
    }
    const resetValue = () =>{
        setValue("");
    }

    return {
        value : value,
        inputChangeHandler : inputChangeHandler,
        resetValue :resetValue
    }
}

export default useInput;