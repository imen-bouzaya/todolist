import React, { useState } from 'react'
import AddTask from './AddTask'
import './App.css'
import ToDolist from './ToDolist'

const App = () => {
  const [todoList, setTodoList] = useState([
    { id: Math.random(), action :"learn Hooks", isDone:false },
    {id: Math.random(),action :"learn props", isDone:true},
    {id:Math.random(), action:"learn state",isDone:true}
   ])
   const [text, setText] = useState("")
   const [count, setCount] = useState(0)
   const handleComplete=(i)=>{
     setTodoList(todoList.map(el=>
     el.id==i? {...el,isDone:!el.isDone}:el ))
   }
   const handleDelete=(i)=>{
     setTodoList(todoList.filter(el=> el.id!==i))
   }
   const handleChange=(e)=>{
     setText(e.target.value)   }
     const handleAdd=(x)=>{
       const NewTask={
         id:Math.random(),
         isDone:false,
         action:x
       }
      text.trim().length==0? alert("the input is empty"):
       setTodoList([...todoList,NewTask])
       setText("")
     }
     const handleSubmit=(e)=>{
      e.preventDefault();
      handleAdd(text)
     }
 
  return (
    <div>
<AddTask handleSubmit={handleSubmit} handleChange={handleChange}text={text}/>
<ToDolist todoList={todoList} handleComplete={handleComplete} handleDelete={handleDelete} />

    </div>
  )
}

export default App