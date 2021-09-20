import './App.css';
import Home from './Components/Home';
import Rover from './Components/Rover';
import Photos from './Components/Photos';
import { useState } from 'react';
import { Route, Link } from 'react-router-dom';


function App() {
  // Create state for rovers

//   const [rover, setRover] = useState('');
//   const [manifest, setManifest] = useState([]);
//   const [camera, setCamera] = useState('');

  
  // Link to Rover page with Rover info
  // Link to Camera page with carousel pictures
  return (
		<div>
			<header>
				<Link to=''>
					<h1>VIEWS FROM MARS</h1>
				</Link>
			</header>
			<main>
				<Route exact path='/' component={Home} />
				<Route
					exact
					path='/:rover'
					component={Rover}
				/>
				<Route
					exact
					path='/:rover/:cam'
					component={Photos}
				/>
			</main>
		</div>
	);
}

export default App;