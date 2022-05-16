import React, {Component} from 'react';
import CardList from '../components/CardList';
import Scroll from './Scroll';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css'


class App extends Component{
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    onSearchChange = (e) => {
        this.setState({searchfield: e.target.value})
      
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(user => this.setState({robots: user}));   
    }

    render() {
    const {robots, searchfield} = this.state

 const filteredRobots = robots.filter(robot => 
    robot.name.toLowerCase().includes(searchfield.toLowerCase())  
        )
        return (
        !robots.length ?
        <div className='tc'> <h1>Loading</h1></div>
        :<div className='tc'>
            <h1 className='f2'>RoboFriends</h1>
            <SearchBox onSearchChange = {this.onSearchChange}/>
            <Scroll>
            <ErrorBoundary>
            <CardList robots={filteredRobots}/>
            </ErrorBoundary>
            </Scroll>
            </div>
        )
            
    }     
        
    }

export default App;