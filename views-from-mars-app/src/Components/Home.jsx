import React from 'react';
import { Link } from 'react-router-dom';


const Home = ( ) => {
    
    return (
        <header>
            <Link to='/curiosity'>
				<button className='rover' >CURIOSITY</button>
			</Link>
			<Link to='/opportunity'>
				<button className='rover' >OPPORTUNITY</button>
			</Link>
			<Link to='/spirit'>
				<button className='rover' >SPIRIT</button>
			</Link>
        </header>
    );
};

export default Home;