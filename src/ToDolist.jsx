import React from 'react'

const ToDolist = ({todoList, handleComplete,handleDelete}) => {
  return (
    <div>
        <h2>finished tasks:  {todoList.filter(el=>el.isDone).length }  </h2>
        <h2>unfinished tasks:  {todoList.filter(el=>!el.isDone).length }  </h2>
        {
        todoList.map(el => <div key={el.id}><h2 className={el.isDone?'done':''}>{el.action}</h2>
        <button onClick={()=>handleComplete(el.id)}>Complete</button>
        <button onClick={()=>handleDelete(el.id)}>Delete</button>
        </div>)
      }</div>
  )
}

export default ToDolist