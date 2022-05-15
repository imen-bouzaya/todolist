import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { userInput: ' ',
      items: [
      { id: Math.random(),action:"learn props",isCompleted:false},
      { id: Math.random(),action:"learn Hooks",isCompleted:false},
       { id: Math.random(),action:"learn Java",isCompleted:false}
    ]};


  }


  onChange(event){
   
    let ob={
    id:Math.random(),
    action:event.target.value,
    isCompleted:false}
    this.setState({items: [...this.state.items,ob]})
    console.log(this.state);
    this.setState({
      userInput : event.target.value
    })
  }

  addTodo(event)
  {
    event.preventDefault();
    this.setState({
      userInput:"",
      items : [...this.state.items, this.state.userInput]
    })
    console.log(this.state)
  }

  doneTodo(event)
  {

  }
renderToDo()
{
  return this.state.items.map((item) =>{
    return (
    <div key={item} >
      {item }
      <button onClick={this.deleteToDo.bind(this)}>X</button>
    </div>)
  })  
}

  render() {
    return (
      <div>
        <h1 >
          Action To Do : </h1>
        <form>
          <input 
                    type="text" 
                    placeholder="let do somthing new" 
                    onChange={this.onChange.bind(this)} 
                    value={this.state.userInput}
            />
        <button onClick={this.addTodo.bind(this)}> Add me </button>
      </form>
      <br/>
      <div>
        {this.renderToDo()}
        </div>
      </div>
    )
  }
}



