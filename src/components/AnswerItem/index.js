import React from 'react';
import './AnswerItem.css';
const AnswerItem = (props)=>{

    const {ques:
        {correctAnswer,image,id,userAnswer}
        ,checkAnswer} = props;



    const isCorectAnswer = checkAnswer({correctAnswer,userAnswer})
    return (

        <div className={`list-item container  col-xs-12 ${isCorectAnswer && "isCorrectCnswer"} `} key={id}>
            <div className="row">
                <div className="id-of-test col-sm-2">{id}</div>
                <div className="main-content-test col-sm-10">
                    <div className="container-of-img-test">

                        <img src={`/${image}`} className="rounded"/>
                    </div>
                    Ваш ответ:
                    { typeof userAnswer =='object'?Object.keys(userAnswer).filter((an)=>userAnswer[an]).join(','):userAnswer}


                    <h3 className="text-of-test">Правильный ответ: {typeof userAnswer =='object'?correctAnswer.join(','):correctAnswer} </h3>

                </div>
            </div>
        </div>
    )
}
export default AnswerItem;
