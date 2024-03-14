import React, { useReducer } from 'react'

function Reducer() {

    let [state, dispatch] = useReducer((prevState, action) => {


if(action=='inc'){
    return prevState+1
}else if(action=='dec'){
    return prevState-1
}else if(action=='res'){
    return prevState=0
}


    }, 0)


    return (
        <div>
            <h1>{state}</h1>
            <button onClick={() => { dispatch('inc') }}>increase</button>
            <button onClick={() => { dispatch('dec') }}>Decrease</button>
            <button onClick={() => { dispatch('res') }}>Reset</button>
        </div>
    )
}

export default Reducer