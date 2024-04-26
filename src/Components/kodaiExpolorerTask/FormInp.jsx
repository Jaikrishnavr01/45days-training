import React, { useState } from 'react'

function FormInp() {
    const[inputval, setInputVal] = useState()
    const[TextareaVal ,SetTextareaVal] = useState()
    const[selectval , SetSelectval] = useState()

    const[updatedinputval, setUpdatedInputVal] = useState()
    const[UpdatedTextareaVal ,SetUpdatedTextareaVal] = useState()
    const[Updatedselectval , SetUpdatedSelectval] = useState()


    const HandleSubmit = (e) => {
        e.preventDefault()
        setUpdatedInputVal(inputval)
        SetUpdatedTextareaVal(TextareaVal)

        SetUpdatedSelectval(selectval)
    }

  return (
    <div>
        <form onSubmit={HandleSubmit}>
            <label>Input: </label>
            <input type="text" onChange={(e) => (setInputVal(e.target.value))}/>
            <label>TextArea: </label>
            <textarea id="" cols="30" rows="10" onChange={(e) => (SetTextareaVal(e.target.value))}></textarea>
            <label>Select: </label>
            <select onChange={(e) => (SetSelectval(e.target.value))}>
                <option>select an option</option>
                <option value="option1">option1</option>
                <option value="option2">option2</option>
            </select>
            <button type='submit'>Submit</button>
        </form>
        <hr />
        <p>Input : {updatedinputval}</p>
        <p>Textarea : {UpdatedTextareaVal}</p>
        <p>Select : {Updatedselectval}</p>
        <hr />
        </div>
  )
}

export default FormInp