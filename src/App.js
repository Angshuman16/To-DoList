
import { useState } from 'react';
import './App.css';
import ToDoInput from './Components/ToDoInput';
import ToDoList from './Components/ToDoList';
function App() {
  const [ListTodo,setListToDo]= useState([]);
  const addList = (inputText) =>{
    setListToDo([...ListTodo,inputText]);
  }
  const deleteListItem = (key) =>{
      const newList=[...ListTodo];
      newList.splice(key,1);
      setListToDo([...newList]);
  }
  return (
    <>
    <h1 className='px-[12rem] mx-[12rem] my-50px text-xl align-content:center text-red-900 flex font-bold '>TO DO LIST</h1>

    <ToDoInput  addList={addList}/>
    
    <hr></hr>

    <h1 className='text-2xl px-[12rem] mx-[12rem] my-4 py-4'>TODO</h1>
    {ListTodo.map((listitem,i) =>{
      return(
        <ToDoList key={i} item={listitem} index={i} deleteItem={deleteListItem} />
      )
    })}
   
    </>

  );
}

export default App;
