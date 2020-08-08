import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Number value={10}/>
                <NumberPropsAsFC numberProps={{value: 10}}/>
                <String value={"10"}/>
                <Person first={"John"} last={"Mayor"} age={39}/>
            </header>
        </div>
    );
}

type NumberProps = { value: number }
const Number = (props: NumberProps) => <div>The number is {props.value}</div>
const NumberPropsAsFC: React.FunctionComponent<{ numberProps: NumberProps }> = ({numberProps}) => <div>The number as Functional Component is {numberProps.value}</div>

type StringProps = { value: string }
const String = (props: StringProps) => <div>The string is {props.value}</div>

type PersonProps = {first: string, last: string, age: number}
const Person = (props: PersonProps) => <div>Hello {props.first} {props.last}, you are {props.age} years old!</div>


export default App;
