import React, {useState, useEffect} from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

const App = () => {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setRobots(data));
    }, []);

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    };

    return !robots.length ? 
            (
                <h1>Loading</h1>
            ): 
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <Searchbox searchChangeFunction={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
};

// class App extends Component {
//     constructor() {
//         super();
//         this.state = {
//             robots: [],
//             searchfield: '',
//         };
//         console.log('constructor');
//     };

//     componentDidMount() {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(response => response.json())
//             .then(users => this.setState({robots: users}));
//         console.log("componentDidMount");
//     };

//     onSearchChange = (event) => {
//         this.setState({
//             searchfield: event.target.value
//         });
//     };

//     render() {
//         console.log("render");
//         const {robots, searchfield} = this.state;
//         const filteredRobots = robots.filter(robot => {
//             return robot.name.toLowerCase().includes(searchfield.toLowerCase());
//         });
//         return !robots.length ? 
//             (
//                 <h1>Loading</h1>
//             ): 
//             (
//                 <div className='tc'>
//                     <h1 className='f1'>RoboFriends</h1>
//                     <Searchbox searchChangeFunction={this.onSearchChange}/>
//                     <Scroll>
//                         <ErrorBoundry>
//                             <CardList robots={filteredRobots}/>
//                         </ErrorBoundry>
//                     </Scroll>
//                 </div>
//             );
//     };   
// };


export default App;