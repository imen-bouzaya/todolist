import React from 'react'

const AddTask = ({handleChange,handleSubmit,text}) => {
  return (
    <div>     
     <form onSubmit={handleSubmit}>
    <input type="text" value={text} onChange={handleChange}/>
    
    <button>Add</button>
  </form></div>
  )
}

export default AddTask