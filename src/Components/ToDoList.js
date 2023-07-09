import React from 'react'

const ToDoList = (props) => {
  return (
   <div>
    <li className='h-10 border p-2 m-2 border-black w-[32rem]'>
        {props.item}
    </li>
   </div>
  )
}

export default ToDoList