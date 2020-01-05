import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = ({onClick, text}) => (
    <button onClick={onClick}>
        {text}
    </button>
)

const Text = ({text, number, unit}) => {
    return(
        <p>{text} {number} {unit}</p>
    )
}

const Statistics = ({counter, good, neutral, bad, avg, positive}) => {
    if (counter === 0) {
        return (
            <div>
                No feedback given
            </div>
        )
    }

    return (
        <table>
            <tbody>
                <tr>
                    <td><Text text={'Good'} number={good}/></td>
                </tr>
                <tr>
                    <td><Text text={'Neutral'} number={neutral}/></td>
                </tr>
                <tr>
                    <td><Text text={'Bad'} number={bad}/></td>
                </tr>
                <tr>
                    <td><Text text={'All'} number={counter}/></td>
                </tr>
                <tr>
                    <td><Text text={'Average'} number={avg}/></td>
                </tr>
                <tr>
                    <td><Text text={'Positive'} number={positive} unit={'%'}/></td>
                </tr>
            </tbody>
        </table>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [counter, setCounter] = useState(0)
    const [feedBack, setFeedback] = useState(0)

    const goodClick = () => {
        setFeedback(feedBack + 1)
        setCounter(counter + 1)
        setGood(good + 1)
    }

    const neutralClick = () => {
        setCounter(counter + 1)
        setNeutral(neutral + 1)
    }

    const badClick = () => {
        setFeedback(feedBack - 1)
        setCounter(counter + 1)
        setBad(bad + 1)
    }

    let avg = feedBack / counter;
    let positive = (good / counter)*100;

    return (
        <div>
            <h3>Give Feedback</h3>
            <Button onClick={goodClick} text='good' />
            <Button onClick={neutralClick} text='neutral' />
            <Button onClick={badClick} text='bad' />
            <h3>Statistics</h3>
            <Statistics counter={counter} good={good} neutral={neutral} bad={bad} avg={avg} positive={positive} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
