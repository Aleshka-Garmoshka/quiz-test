import React from 'react';
import AnswerItem from "../AnswerItem";

const Finish = ({ questions })=>{
    const checkAnswer = (ques)=>{
        if ( typeof ques.userAnswer !=='object'){
            return ques.correctAnswer == ques.userAnswer.trim();
        }
        else{
            const filterans = Object.keys(ques.userAnswer).filter((el)=>ques.userAnswer[el]);
            return filterans
                    .every((el)=>(ques.correctAnswer.includes(el)+`<br>`))&&
                filterans.length === ques.correctAnswer.length
        }

    }
    return(
        <>
            {
                questions.map((ques) => <AnswerItem  checkAnswer={checkAnswer} ques={ques}/>)
            }
            <h3>Всего правильных ответов: 
                {questions.filter(checkAnswer).length}

            </h3>
    </>

)

}

export default Finish;