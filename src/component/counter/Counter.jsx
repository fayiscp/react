import { useState } from "react";
import "./Counter.css"

function Counter() {
    let [count, setCount] = useState(0)
    let [state, setState] = useState(true)
    let [color, setColor] = useState('red')
    let [title, setTitle] = useState('')

    function getValue(event) {
        console.log(event.target.value);
        setTitle(event.target.value)
    }


    let changeCounter = () => {
        setCount(count + 1)
    }

    let resetCounter = () => {
        setCount(0)
    }

    let changeCount = () => {
        setCount(count - 1)
    }

    let changecolor = () => {
        setColor('green')
    }

    let hideShow = () => {
        setState(!state)
    }

    return (

        <div className="box">
            <div className="boxx">
                <h1>{title}</h1>

                <h1 className="counter" style={{ color: color }}>{state ? count : null}</h1>
                <div className="btn">

                    <button onClick={changeCounter}>INCREMENT</button> <br /><br />
                    <button onClick={changeCount}>DECREMENT</button> <br /><br />
                    <button onClick={changecolor}>CHANGECOLOR</button> <br /><br />
                    <button onClick={resetCounter}>RESET</button> <br /><br />

                    <button onClick={hideShow}>{state ? 'HIDE' : 'SHOW'}</button>
                </div>
                <input onChange={getValue} type="text"/>
            </div>
        </div>
    )
}
export default Counter
