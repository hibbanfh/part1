import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = ({onClick, text}) => (
    <button onClick={onClick}>{text}</button>
)

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [vote, setVote] = useState(new Array(6).fill(0))

    const increaseSelected = () => {
        const number = Math.floor(Math.random() * 6)
        setSelected(number)
    }

    const handleVote = () => {
        const voterecap = [...vote]
        voterecap[selected] += 1
        setVote(voterecap)
    }

    const handleMax = (vote) => {
        const mostvotes = Math.max(...vote)
        return mostvotes
    }
    
    const indexMax = () => {
        return vote.indexOf(Math.max(...vote))
    
    }
    return (
        <div>
            <h3>Anectode of the day</h3>
            <p>{props.anecdotes[selected]}</p>
            <p>has {vote[selected]} votes</p>
            <Button onClick={increaseSelected} text='Next Anectode'/>
            <Button onClick={handleVote} text='vote' />
            <h3>Anecdote with most votes</h3>
            <p>{props.anecdotes[indexMax()]}</p>
            <p>has {handleMax(vote)} votes</p>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent another development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that human can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));

