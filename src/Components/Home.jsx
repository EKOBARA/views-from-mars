import React from 'react';
import { Link } from 'react-router-dom';


const Home = ( ) => {
    
    return (
        <>
        <nav>
            <Link to='/curiosity'>
				<button className='rover' >CURIOSITY</button>
			</Link>
			<Link to='/spirit'>
				<button className='rover' >SPIRIT</button>
			</Link>
			<Link to='/opportunity'>
				<button className='rover' >OPPORTUNITY</button>
			</Link>
        </nav>
        <div className='mars'>
            <img 
                    src='https://media.istockphoto.com/photos/venus-view-elements-of-this-image-are-furnished-picture-id1003991098?k=20&m=1003991098&s=612x612&w=0&h=6rFAs93vxe6AslK2237RX1c9ab9_oj787c_8dwPToTE='
                    alt='Mars Planet'
                />
        </div>
        </>
    );
};

export default Home;