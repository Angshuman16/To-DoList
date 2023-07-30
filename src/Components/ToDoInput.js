import React, { useState } from 'react'

const ToDoInput = (props) => {
    const [inputText,setInputText] = useState("");
  return (
    <div className='px-[12rem] mx-[12rem] display-flex flex-row font-bold '>
        <input type="text" 
        placeholder='Enter your TODO' 
        className='h-10 m-2 p-2 rounded-xl shadow-md w-[25rem]  font-semibold justify-items:center;'
        value={inputText}
        onChange={e =>{
            setInputText(e.target.value);

        }}
        >

        </input>
        <button className=' p-2 m-2 border bg-orange-300 hover:[w-23] h-10 w-22 rounded-lg'
        onClick={() =>{
            props.addList(inputText);
            setInputText("");
        }}
        
        > ADD ITEMS </button>
        {/* {inputText} */}
    </div>
  )
}

export default ToDoInput