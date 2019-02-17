import React from 'react';
import CardList from '../Components/CardList';
// import {robot} from '../Robot.js';
import SearchBar from '../Components/SearchBar';
import Scroll from '../Components/Scroll.js';
import './App.css'

class App extends React.Component{
	constructor(){
			super();
			this.state={
				robot:[],
				searchfield:''
			}
		}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(users=>{this.setState({robot:users})});
	}
	searchinput= (event) =>{
		this.setState({searchfield:event.target.value})
		
	}
	render(){
		const filteredRobots=this.state.robot.filter((item)=>{
			return item.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		return(
		<div className="tc">
		<h1 className="f1" id="header"> RoboFriends</h1>
		<SearchBar input={this.searchinput}/>
		<Scroll>
		<CardList robot={filteredRobots}/>
		</Scroll>
		</div>

		);
	}
	
}
export default App;