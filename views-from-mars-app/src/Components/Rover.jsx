import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';



const Rover = ( ) => {

    const { rover } = useParams();

    const [manifest, setManifest] = useState(null);
    const [camera, setCamera] = useState([]);

    console.log(rover);
    
    // API URL
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/?api_key=${process.env.REACT_APP_ROVER_KEY}`
    
    // get API data
    useEffect(() => {
       
        axios.get(url)
            .then((res) => {
                const mani = res.data.rover;
                setManifest(mani);
                const camArr = mani.cameras
                setCamera(camArr);
            })
            .catch(() => console.error)
            
        }, [])
        
        if (!manifest) return <p>Loading ...</p>
        console.log(camera);
        
    return (
        <>
            <section>
                {/* <Cameras camera={camera} /> */}

                {camera.map((elem, idx) => {
                    return (
                        <Link to={`${rover}/${elem.name}`}>
		    	 	        <button className='camera' >{elem.name}</button>
		    	        </Link>
                        )   
                })}
                
                
            </section>
            <section>
                <p>{manifest.name}</p>
                <p>{manifest.launch_date}</p>
                <p>{manifest.landing_date}</p>
                <p>{manifest.status}</p>
                <p>{manifest.max_date}</p>
                <p>{manifest.total_photos}</p>
            </section>
        </>
    );
};

export default Rover;