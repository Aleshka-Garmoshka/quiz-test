import React from 'react';
import "./TextInputField.css";
const TextInput = (props) => {
    const {value, handleChange, userAnswer} = props;
    return (
        <input type="text"
               className="input-text" value={userAnswer} onChange={handleChange} placeholder={userAnswer}/>
    )
}
export default TextInput;