import React from 'react';
import "./RadioField.css";
const Radio = (props) => {
    const {value, handleChange, id, userAnswer} = props;
    const {variants} = props;
    return (
        <div>
            {variants.map((item, index) => {
                return (
                    <React.Fragment>
                        <label htmlFor={`contactChoice${index}`} className="container-radio">
                            <input type="radio" className="radio" onChange={handleChange}
                                   id={`contactChoice${index}`}
                                   checked={userAnswer===item}
                                   name="contact" value={item}/>
                            <span className="checkmarkone"></span>

                            {item}</label>
                    </React.Fragment>
                )
            })}
        </div>

    )
}
export default Radio;