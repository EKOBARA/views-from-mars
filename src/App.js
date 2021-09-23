import './App.css';
import Home from './Components/Home';
import Rover from './Components/Rover';
import Photos from './Components/Photos';
import { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import Moon from './Components/Moon';


function App() {
  // Create state for rovers

//   const [rover, setRover] = useState('');
//   const [manifest, setManifest] = useState([]);
  const [cameras, setCameras] = useState([]);
  const [date, setDate] = useState('2015-6-3');

  
  // Link to Rover page with Rover info
  // Link to Camera page with carousel pictures
  return (
		<div className='body'>
			<header>
				<Link to=''>
					<h1>VIEWS FROM MARS</h1>
				</Link>
			</header>
			<main>
				<Route exact path='/' component={Home} />
				<Route exact path='/moon' component={Moon}/>
				<Route exact path='/:rover' render={ () => <Rover cameras={cameras} setCameras={setCameras} date={date} setDate={setDate} />} />
				<Route exact path='/:rover/:cam' render={ () => <Photos cameras={cameras} setCameras={setCameras} date={date} />}/>
			</main>
			
		</div>
	);
}

export default App;