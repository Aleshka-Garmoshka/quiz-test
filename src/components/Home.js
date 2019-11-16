import React from 'react';
import ListItem from "./ListItem"
import "./home.css";
class Home extends React.Component {
    componentDidMount() {
        this.props.resetData();
    }

    render() {
        return (
            <>
                <div className="container-of-test container">
                    {
                        this.props.questions.map((ques, i) => {
                            return (
                                <ListItem
                                    {...ques}
                                    key={ques.id}
                                    handleChange={this.props.handleChange(i)}
                                />
                            )
                        })
                    }
                </div>
                <div className="container container-of-buttons">
                <button onClick={this.props.confirmRedirect}>Submit answers</button>
                <button onClick={this.props.resetData}>Сбросить поля теста</button>
                </div>
            </>
        )
    }
}
export default Home;