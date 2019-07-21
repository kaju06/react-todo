import React, { Component } from "react"
import ToDoList from './todoList';

class AddTodo extends Component {
  state = {
    todoItem: { name: "", checked: false },
    todoList: [{ id: 1, name: "email to manager", checked: false },
    { id: 3, name: "complete assingment", checked: true },
    ],
    areAllTasksCompleted: false,
  }

  handleInput = (e) => {
    let title = e.target.value;
    this.setState({ todoItem: { id: this.state.todoList.length + 1, name: title, checked: false }, areAllTasksCompleted: false })
  }

  handleClick = (e) => {
    this.setState({
      todoList: [...this.state.todoList, this.state.todoItem],
      todoItem: { ...this.state.todoItem, name: "" }
    })
  }

  toggleCheck = (id) => {
    let todoList = this.state.todoList;
    todoList.forEach(item => {
      if (id === item.id) {
        item.checked = !item.checked
      }

    })
    this.setState({ todoList })
    this.checkTaskCompletion();
  }

  checkTaskCompletion = () => {
    let count = 0;
    let todoList = this.state.todoList;
    todoList.forEach(item => {
      if (item.checked === true)
        count += 1;
    })
    console.log("count: ", count);
    console.log("completed : ", this.state.todoList.length)
    if (count === this.state.todoList.length)
      this.setState({ areAllTasksCompleted: true });
    else
      this.setState({ areAllTasksCompleted: false });
  }

  render() {
    return (
      <div>
        <form className="container">
          <input type="text" value={this.state.todoItem.name} onChange={this.handleInput} />
          <button type="button" onClick={this.handleClick}>Add</button>
        </form><br />
        <ToDoList todolist={this.state.todoList} toggleCheck={this.toggleCheck} />
        {this.state.areAllTasksCompleted && <h3>Ya'ay, you have completed all your tasks!</h3>}
      </div>
    )
  }
}
export default AddTodo;