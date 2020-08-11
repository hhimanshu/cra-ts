import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Number value={10}/>
                <NumberPropsAsFC numberProps={{value: 10}}/>
                <String value={"10"}/>
                <Person first={"John"} last={"Mayor"} age={39}/>
                <Counter/>
                <GithubUserName/>
                <WithDefaultProps/>
                <WithDefaultProps name={"Amy"}/>
            </header>
        </div>
    );
}

type NumberProps = { value: number }
const Number = (props: NumberProps) => <div>The number is {props.value}</div>
const NumberPropsAsFC: React.FunctionComponent<{ numberProps: NumberProps }> = ({numberProps}) => <div>The number as
    Functional Component is {numberProps.value}</div>

type StringProps = { value: string }
const String = (props: StringProps) => <div>The string is {props.value}</div>

type PersonProps = { first: string, last: string, age: number }
const Person = (props: PersonProps) => <div>Hello {props.first} {props.last}, you are {props.age} years old!</div>

const Counter: React.FunctionComponent = () => {
    const [count, setCount] = useState<number>(0);
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(e.isDefaultPrevented())
        setCount(count + 1)
    }

    return <div>
        Current Count - {count}
        <button onClick={(e) => handleClick(e)}>increment</button>
    </div>
}

const GithubUserName: React.FunctionComponent = () => {
    const [name, setName] = useState<string>("");

    useEffect(() => {
        fetch("https://api.github.com/users/hhimanshu")
            .then(res => res.json())
            .then(d => setName(d["name"]))
    })

    return <div>My github user name is {name}</div>
}

interface DefaultProps {
    name?: string
}

class WithDefaultProps extends React.Component<DefaultProps, any> {
    static defaultProps: DefaultProps = {name: "Stranger!"}

    render() {
        return <div>The name passed was {this.props.name}</div>
    }
}


export default App;
