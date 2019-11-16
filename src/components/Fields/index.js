import React from 'react';
import CheckBox from './CheckboxField';
import Radio from './RadioField';
import Select from './SelectField';
import TextInput from './TextinputField';

const Field = (props) => {
    const {answerType} = props;
    switch (answerType) {
        case 'checkbox':
            return <CheckBox {...props}/>;
        case 'radio':
            return <Radio {...props}/>;
        case 'select':
            return <Select {...props}/>;
        case 'text':
            return <TextInput {...props}/>;
    }
}
export default Field;