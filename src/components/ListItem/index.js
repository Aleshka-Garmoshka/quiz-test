import React from 'react';
import Field from '../Fields';
import './ListItem.css';
const ListItem = (props) => {
    const {answerType,correctAnswer,question,image,id} = props;

        return (
            <div className="list-item container  col-xs-12" key={id}>
                <div className="row">
                <div className="id-of-test col-sm-2">{id}</div>
                <div className="main-content-test col-sm-10">
                    <div className="container-of-img-test">
                        <img src={`/${image}`} className="rounded"/>
                    </div>
                    <h3 className="text-of-test">{question} </h3>
                    <Field {...props} />
                </div>
                </div>
            </div>
        )

}
export default ListItem;