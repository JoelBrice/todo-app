import React, { Component } from 'react';
import './App.css';
import {
  Button,
  Input,
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardFooter
} from 'reactstrap';


import SingleTask from './SingleTask';

export default class App extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      tasks: [
      ],
      currentTask: ""
    };

    this.handleInput = this.handleInput.bind(this);
    this.createNewToDoItem = this.createNewToDoItem.bind(this);
    this.deleteItTask = this.deleteItTask.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  //Create new Item in the list
  createNewToDoItem = () => {
  

  }

  //Get the input and pass it to the list
  handleInput = e => {
    e.preventDefault();
    this.setState({
      currentTask: e.target.value
    });
  }

  //Delete Item from the list
  deleteItTask = i => {
    let tasksCopy = this.state.tasks.slice();
    tasksCopy.splice(i, 1);

    this.setState({
      tasks: tasksCopy
    });
      
  }
  //Handle Keyboard
  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.handleInput();
    }
  }

//Copy the list

onClick = () =>{
  let tasksCopy = this.state.tasks.slice();
  tasksCopy.push(this.state.currentTask);
  this.setState({
    tasks: tasksCopy,
    currentTask: ''
  });
}

  render() {
    let tasksList = this.state.tasks.map((e, i) =>{
      return(
        <SingleTask task = {e} delete = { () => this.deleteItTask(i)} />
      );
    })
    return (
      <div className="App">
        <header className="header">
          <h3>TODO REACT APP </h3>
        </header>
        <div className="task">
          <Input className="inputTask" type="text"
            placeholder=" What do you want to do later? "
            value={this.state.currentTask}
            onChange={this.handleInput} />
          <Button type="submit" className="btn btn-lg btn-success addTask"
            onClick={this.onClick}
            onKeyPress={this.handleKeyPress}> +
        </Button>
    
        </div>
        <Card className="tasks">
          <CardHeader>
            <CardText> Todo List </CardText>
          </CardHeader>
          <CardBody>
    { this.state.tasks.length ===0? "No task in the list yet": <ul>{tasksList}</ul>}
          </CardBody>
          <CardFooter>
            <CardText><em>A Todo List created by
              <a href="https://www.joeltiogo.netlifly.com"> Joel Tiogo </a>
          </em> 
            </CardText>
          </CardFooter>
        </Card>
      </div>
    );
  }

}
