import React from 'react';
import {Route, Switch, withRouter} from "react-router-dom";
import Home from "./Home";
import Finish from "./FinishPage";
import data from "../assets/data";

class Wrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState = () => ({
        questions: data.questions.map(question => ({
            ...question,
            userAnswer: question.answerType === 'checkbox' ? question.variants.reduce((acc, variant) => {
                acc[variant] = false;
                return acc;
            }, {}) : ''
        }))
    });

    handleChange = (index) => (e) => {
        const questions = [
            ...this.state.questions.slice(0, index),
            {
                ...this.state.questions[index],
                userAnswer: this.state.questions[index].answerType === 'checkbox' ? {
                    ...this.state.questions[index].userAnswer,
                    [e.target.value]: e.target.checked
                } : e.target.value
            },
            ...this.state.questions.slice(index + 1, this.state.questions.length)
        ];
        this.setState({
            questions
        })
    };

    confirmRedirect = (e) => {
        e.preventDefault();
        const notAnsweredQuestionsLength = this.state.questions.filter(question =>
            typeof question.userAnswer === 'object' ?
                !Object.keys(question.userAnswer).some(an => question.userAnswer[an])  :
                !question.userAnswer).length;
        if (notAnsweredQuestionsLength) {
            if (window.confirm(`Are you sure to finish? You have ${notAnsweredQuestionsLength} not answered question${notAnsweredQuestionsLength > 1 ? 's' : ''}`)) {
                this.props.history.push('/finish');
            }
        }
        else{
            this.props.history.push('/finish');

        }
    };

    render() {
        const {questions} = this.state;
        return (
            <Switch>
                <Route path="/finish">
                    <Finish questions={questions}/>
                </Route>
                <Route path="/">
                    <Home
                        questions={questions}
                        handleChange={this.handleChange}
                        confirmRedirect={this.confirmRedirect}
                        resetData={() => this.setState(this.getInitialState())}
                    />
                </Route>
            </Switch>
        );
    }
}


export default withRouter(Wrapper);
