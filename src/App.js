import React from 'react';
import List from './components/TodoList';
import TodoForm from './components/TodoForm';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(props) {
    super(props);
    this.state = {
      list : [
        {task: "Finish React Todo List App", id: 1, completed: false},
        {task: "Walk Millie", id: 2, completed: false},
        {task: "Get coffee", id: 3, completed: false}
      ],
      toDo: ""
    };
  };

  trackInputHandler = event => {
    this.setState({toDo: event.target.value});
  };

  addToDo = event => {
    event.preventDefault();
    const toDos = this.state.list;
    toDos.push({task: this.state.toDo, id: Date.now(), completed:false});
    this.setState({list: toDos});
    this.setState({toDo: ""});
  }

  toggleCompleted = id => {
    let list = this.state.list.slice();
    list=list.map(toDo => {
      if(toDo.id === id) {
        toDo.completed = !toDo.completed;
        return toDo;
      } else {
        return toDo;
      }
    })
    this.setState({list: list});
  }

  clearCompleted = event => {
    event.preventDefault();
    let list = this.state.list.slice();
    list = list.filter(toDo => toDo.completed === false);
    this.setState({list: list});
  }

  render() {
    return (
      <div>
        <h1>Todo List App</h1>
        <List list={this.state.list} handler={this.toggleCompleted} />
        <TodoForm changeHandler={this.trackInputHandler} value={this.state.toDo} submitHandler={this.addToDo} clearHandler={this.clearCompleted} /> 
      </div>
    );
  }
}

export default App;
