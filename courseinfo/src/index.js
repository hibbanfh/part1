import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const Header = (props) => {
    
}

const Content = () => {

    return (
        <div>
            <Part />
            <Part />
            <Part />
        </div>
    )
}

const Total = () => {

}

const App = () => {
    const course =  {
        name: 'Half Stack application development',
        parts: [ 
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to passing data',
                exercises: 7
            },
            {
                name: 'State of component',
                exercises: 14
            } 
        ]
    }

    return (
        <div>
            <Header course={course} />
            <Content parts={parts} />
            <Total parts={parts} />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))