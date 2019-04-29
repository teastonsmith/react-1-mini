import React, { Component } from 'react';
import './App.css';

// class App extends Component {
function App(props) {
	constructor() {
		super();

		this.state = {
			friends: [],
			picture: '',
			name: '',
		};
	}

	updatePicture(value) {
		this.picture.setState(value);
		// this.setState({ picture: value });
	}

	updateName(value) {
		this.name.setState(value);
		// this.setState({ name: value })
	}

	addFriend() {
		// const { friends, picture, name } = this.state
		// let newFriends = friends.slice()
		// newFriends.push({picture, name})
		// this.setState({ friends: newFriends, picture: '', name: ''})

		this.setState.push(friends);
		friends.push(this.setState);
		this.setState;
	}
``
	render() {
    const friends = this.state.friends.map(() => {
    return (
				<div key='parent1'>
					<img src={this.friends.picture} height='100px' width='100px' />
					<span>{this.friends.name}</span>
				</div>
			);
		});
		return (
			<div key='parent2'>
				<span>Enter Picture URL</span>
				<input onChange={this.state.updatePicture(e.target.value)} />
				{/* <input onChange={ ( e ) => this.updatePicture( e.target.value ) } value={ this.state.picture } /> */}

				<span>Enter Name</span>
				<input onChange={this.state.updateName(e.target.value)} />
				{/* <input onChange={ ( e ) => this.updateName( e.target.value ) } value={ this.state.name } /> */}

				<button
					// onClick={ () => this.addFriend() }
					onClick={addFriend(() => {
						this.setState();
					})}>
					Add Friend
				</button>

				<div>{this.state.friends}</div>
			</div>
		);
	}
}

export default App;
