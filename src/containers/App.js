import React, {useState, useEffect} from 'react';
import CardList from '../components/CardList';
import Scroll from './Scroll';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css'


function App (){

    const [robots,setRobots] = useState([])
    const [searchfield, setSearchField] = useState('')

    const onSearchChange = (e) => {
        setSearchField(e.target.value)
     
    }
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(user =>setRobots(user));
    },[])



 const filteredRobots = robots.filter(robot => 
    robot.name.toLowerCase().includes(searchfield.toLowerCase())  
        )
        return (
        !robots.length ?
        <div className='tc'> <h1>Loading</h1></div>
        :<div className='tc'>
            <h1 className='f2'>RoboFriends</h1>
            <SearchBox onSearchChange = {onSearchChange}/>
            <Scroll>
            <ErrorBoundary>
            <CardList robots={filteredRobots}/>
            </ErrorBoundary>
            </Scroll>
            </div>
        )
            
        
        
    }

export default App;