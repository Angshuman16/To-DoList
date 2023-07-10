import React from 'react'

const ToDoList = (props) => {
  return (
   <div className='px-[12rem] mx-[12rem] my-7 flex'>
    <ul>
    <li className='h-10 border m-2 p-2 border-black w-[25rem]  rounded-xl'>
        {props.item}
    </li>
    </ul>
    <button  className=' p-2 m-2 border border-blue-300 h-10 w-22 rounded-lg font-bold'
    onClick={e =>{
      props.deleteItem(props.index);
    }}
    >DELETE</button>

   </div>
  )
}

export default ToDoList