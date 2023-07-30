import React from 'react'

const ToDoList = (props) => {
  return (
    
   <div className='px-[12rem] mx-[12rem] my-3 flex '>
    <ul>
    <li className='h-11  w-[25rem] m-2 p-2 bg-white shadow-md text-xl rounded-xl'>
        {props.item}
    </li>
    </ul>
    <button  className=' p-2 m-2 border bg-orange-300 h-11 w-22 shadow-lg rounded-lg font-bold'
    onClick={e =>{
      props.deleteItem(props.index); 
    }}
    >DELETE</button>

   </div>
   
  )
}

export default ToDoList