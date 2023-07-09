import React, { useState } from 'react'

const ToDoInput = (props) => {
    const [inputText,setInputText] = useState("");
  return (
    <div className='px-5 mx-5 display-flex flex-row'>
        <input type="text" 
        placeholder='Enter your TODO' 
        className='h-10 border border-black w-[25rem]'
        value={inputText}
        onChange={e =>{
            setInputText(e.target.value);

        }}
        >

        </input>
        <button className=' p-2 m-2 border border-blue-300 h-10 w-22'
        onClick={() =>{
            props.addList(inputText);
            setInputText("");
        }}
        
        > ADD </button>
        {/* {inputText} */}
    </div>
  )
}

export default ToDoInput