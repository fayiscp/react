import React, { useState } from 'react'

function Todo() {

    let [state, setState] = useState('')
    let [arr, setArray] = useState([])


    let getValue = (e) => {
        setState(e.target.value)
    }

    let addData = () => {
        if (state != '') {
            let newArr = [...arr, state]
            setArray(newArr)


        }


    }
    let deleteData = (i) => {
        console.log(i);

        let newArr = arr.filter((txt,index) => {

            if (index != i) {
                return txt
            }

        })

        setArray(newArr)

    }


    return (
        <div>
            <input type='text' value={state} onChange={getValue}  />
            <button onClick={addData}>ADD</button>
            {
                arr.map((data, i) => {

                    return (
                        <div key={i} style={{ display: 'flex', alignItems: 'center',gap:'5px' }}>

                            <h1>{data}</h1>
                            <button onClick={() => { deleteData(i) }}>del</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Todo