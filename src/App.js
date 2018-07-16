import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToolBar from './components/toolbar.js'
import MessageList from './components/messageList'


class App extends Component {
  constructor() {
  super()
  this.state ={
      messages: []
  }
}

async componentDidMount() {
  var response = await fetch('http://localhost:8082/api/messages')
  var json = await response.json()
  this.setState({messages: json})
}

toggleStar = (thing) => {
  var messageId = thing -1
  if (this.state.messages[messageId].starred === true){
    this.state.messages[messageId].starred = false
  }else this.state.messages[messageId].starred = true
  this.forceUpdate()
}

toggleRead = () => {
  for (var select in this.state.messages){
    if (this.state.messages[select].selected === true){
      this.state.messages[select].read = true
    }
  }
  this.forceUpdate()
}

toggleUnread = () => {
  for (var select in this.state.messages){
    if (this.state.messages[select].selected === true){
      this.state.messages[select].read = false
    }
  }
  this.forceUpdate()
}

addTag = (thing) => {
  for (var select in this.state.messages){
    if (this.state.messages[select].selected === true){
      this.state.messages[select].labels.push(thing)
    }
  }
  this.forceUpdate()
}

removeTag = (thing) => {
  for (var select in this.state.messages){
    if (this.state.messages[select].selected === true){
      if (this.state.messages[select].labels.indexOf(thing) > -1){
        this.state.messages[select].labels.splice(thing, 1)
      }
    }
  }
  this.forceUpdate()
}

toggleSelected = (thing) => {
var messageId = thing -1
if (this.state.messages[messageId].selected === true){
  this.state.messages[messageId].selected = false
}else this.state.messages[messageId].selected = true
this.forceUpdate()
}

deleteMessage = () => {
  for (var select in this.state.messages){
    if (this.state.messages[select].selected === true){
      this.state.messages.splice(select, 1)
    }
  }
  console.log(this.state.messages)
  this.forceUpdate()
}


  render() {
    return (
      <div className="App">
        <ToolBar
        messages = {this.state.messages}
        toggleRead = {this.toggleRead}
        toggleUnread = {this.toggleUnread}
        addTag = {this.addTag}
        removeTag = {this.removeTag}
        deleteMessage = {this.deleteMessage}
        />
        <MessageList
        toggleStar = {this.toggleStar}
        toggleSelected = {this.toggleSelected}
        messages = {this.state.messages}
        />
      </div>
    );
  }
}

export default App;
