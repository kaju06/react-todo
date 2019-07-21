import React, { Component } from "react"

const ToDoList = (data) => {
  return (
    
    <div className="container">
      <ul className="ui  segment">
        {data.todolist.map((todo) => { 
          return(
          <li key={todo.id} className="item">
          <div class="ui checkbox">
          <input type="checkbox" checked={todo.checked ? "true":""} name="example" onClick={()=>{data.toggleCheck(todo.id)}} />
          <label className={todo.checked?"strike":""}>{todo.name}</label>
         </div>
         </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ToDoList;