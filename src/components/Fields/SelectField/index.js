import React from 'react';
import "./SelectField.css";
const SelectField = (props) => {
    const { handleChange, userAnswer} = props;
    const {variants} = props;

    return (
        <select onChange={handleChange}
                name="select2"
        value={userAnswer}>
            <option>Выберите правильный вариант</option>
            {variants.map((item) => {
                return (
                    <option value={item}>{item}</option>
                )
            })}

        </select>
    )
}
export default SelectField;