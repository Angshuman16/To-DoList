
import { useState } from 'react';
import './App.css';
import ToDoInput from './Components/ToDoInput';
import ToDoList from './Components/ToDoList';
function App() {
  const [ListTodo,setListToDo]= useState([]);
  const addList = (inputText) =>{
    setListToDo([...ListTodo,inputText]);
  }
  return (
    <>
    <h1 className='p-2 m-2 text-xl align-content:center text-red-900 flex'>TO DO LIST</h1>
    <ToDoInput  addList={addList}/>
    <hr></hr>
    <h1 className='text-2xl'>TODO</h1>
    {ListTodo.map((listitem,i) =>{
      return(
        <ToDoList key={i} item={listitem} />
      )
    })}
   
    </>

  );
}

export default App;
