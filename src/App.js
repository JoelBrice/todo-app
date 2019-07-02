import React, { Component } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';

export default class  App  extends Component{
  constructor(prop){
    super(prop);
  this.state = {
    list: [
      {"todo": "Read 1 paper on Computer Vision"},
      { "todo": " Read articles on Machine Learning " }
    ]
  }
}

createNewToDoItem = () => {
    
  this.setState( ({ list, todo }) => ({
        list: [
            ...list,
          {
            todo
          }
        ],
        todo: ''
      })
    );
  };
  handleInput = e =>{
    e.preventDefault();
    this.setState({
      todo: e.target.value
    })
  }
  deleteItem = indexToDelete => {
    
    this.setState(({ list }) => ({
          list: list.filter((toDo, index) => index !== indexToDelete)
        }));
    };
//Handle Keyboard
  handleKeyPress = (e) => {
      if (e.key === 'Enter') {
      this.createNewToDoItem();
      }
      };handleKeyPress = (e) => {
      if (e.key === 'Enter') {
      this.createNewToDoItem();
      }
};

render(){
  return (
    <div className="App">
      <div className="task">
      <input className="inputTask" type="text" placeholder="What do you want to do later?" value = {this.state.todo } onChange = {this.handleInput}/>
      <button type="submit" className="addTask" onClick={this.createNewToDoItem} onKeyPress={this.handleKeyPress}> + </button>
      </div> 
      <ul className="tasks">
      {this.state.list.map(todo =><li key={todo}></li>)} <Button variant ="danger" oncl={this.deleteItem.bind(this)}>X</Button>
      </ul> 
    </div>
  );
}

}

