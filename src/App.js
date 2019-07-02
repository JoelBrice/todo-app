import React, { Component } from 'react';
import './App.css';

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

render(){
  return (
    <div className="App">
      <div className="task">
      <input className="inputTask" type="text" placeholder="What do you want to do later?" value = {this.state.todo } onChange = {this.handleInput}/>
      <button type="submit" className="addTask" > + </button>
      </div>
      <div className="tasks">
        {this.state.list.map(i =><li key={i}>i</li>)}
      </div>
    </div>
  );
}

}

