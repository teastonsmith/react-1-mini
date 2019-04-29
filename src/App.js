import React from 'react';
import './App.css';

function App() {
  constructor() {
    super()

    this.state = {
      friends: [],
      picture: [],
      name: ''
    }

    updatePicture((value) => {
    this.setState.picture
    })

    updateName((value) => {
      this.setState.name
    })

    addFriend(() => {
      this.setState.push(friends)
      this.setState
    })
  }

  render() {
    const friends = this.state.friends.map(() => {
    return (
      <div>
        <img src={this.friends.picture} height="100px" width="100px"></img>
          <span>{this.name}</span>
      </div>
      )
    })
    return (
      <div key="parent">
        <input onChange={this.state.updatePicture()}>
          <span>Enter Picture URL</span>
        </input>
        <input onChange={this.state.updateName()}>
          <span>Enter Name</span>
        </input>
        <button onClick={this.state.addFriend}>Add Friend</button>
        <div>{this.friends}</div>
      </div>
    );
  }
}

export default App;
