import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';



const Rover = ( { date, setDate, setCameras }) => {

    const { rover } = useParams();

    const [ manifest, setManifest ] = useState(null);
    const [ camera, setCamera ] = useState([]);
    // const  = useContext(contextValue)
    
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
                setCameras(camArr);
            })
            .catch(() => console.error)
            
        }, [])

        function handleChange(event) {
        // You can use handleChange for any form that follows this pattern
        setDate(event.target.value);
    }
        
        if (!manifest) return <p>Loading ...</p>
        console.log(camera);
        
    return (
        <>
            <nav className='camera'>
                {camera.map((elem) => {
                    return (
                        <Link to={`${rover}/${elem.name}`}>
		    	 	        <button className='camera' >{elem.name}</button>
		    	        </Link>
                        )   
                })}
            </nav>
            <form>
                <label htmlFor="date">Select a date between the Landing date and the Last date</label>
                <input id='date' type="text" onChange={handleChange} value={date} />
            </form>
            <section>
                <div className='bold'>
                    <p>Rover:</p>
                    <p>Launch Date:</p>
                    <p>Landing Date:</p>
                    <p>Current Status:</p>
                    <p>Last Date:</p>
                    <p>Total Photos:</p>
                </div>
                <div className='info'>
                    <p>{manifest.name}</p>
                    <p>{manifest.launch_date}</p>
                    <p>{manifest.landing_date}</p>
                    <p>{manifest.status}</p>
                    <p>{manifest.max_date}</p>
                    <p>{manifest.total_photos}</p>
                </div>
            </section>
        </>
    );
};

export default Rover;