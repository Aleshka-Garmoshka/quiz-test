import React from 'react';
import "./CheckBoxField.css";
const CheckBox = (props) => {
    const {value, handleChange, id, userAnswer  } = props;
    const {variants} = props;
    return (
        <div className="flex-container-of-checkbox">
            {variants.map((item, index) => {
                return (
                    <React.Fragment>
                        <label htmlFor={`Checkboxes${index}`}>
                            <input
                                type="checkbox"
                                id={`Checkboxes${index}`}
                                name="scales"
                                checked={userAnswer[item]}
                                onChange={handleChange}
                                value={item}
                        />
                            <span className="checkmark"></span>
                            {item}</label>
                    </React.Fragment>
                )
            })}
        </div>

    )
}
export default CheckBox;