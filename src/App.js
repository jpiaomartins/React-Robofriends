import React, { Component } from 'react';
import CardList from './CardList';
import Searchbox from './Searchbox';
import './App.css';


class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: '',
        };
        console.log('constructor');
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}));
        console.log("componentDidMount");
    };

    onSearchChange = (event) => {
        this.setState({
            searchfield: event.target.value
        });
    };

    render() {
        console.log("render");
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        if(this.state.robots.length === 0) {
            return (
                <h1>Loading</h1>
            )
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <Searchbox searchChangeFunction={this.onSearchChange}/>
                    <CardList robots={filteredRobots}/>
                </div>
            );
        }
    };   
};


export default App;