import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';


const Photos = ( camera ) => {

    const { rover } = useParams();
    const { cam } = useParams();

    const [photos, setPhotos] = useState([]);



    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=1000&camera=${cam}&api_key=${process.env.REACT_APP_ROVER_KEY}`

    useEffect(() => {

       axios.get(url)
            .then((res) => {
                console.log(res)
                const arr = res.data.photos;
                setPhotos(arr)
            })
            .catch(() => console.error)
    }, [])
    console.log(photos)
    if (!photos.length) return <p>No photos taken</p>
    return (
        <>
            <header>
                {/* <Cameras camera={camera} /> */}

                {camera.map((elem) => {
                    return (
                        <Link to={`${rover}/${elem.name}`}>
		    	 	        <button className='camera' >{elem.name}</button>
		    	        </Link>
                        )   
                })}
                
                
            </header>
            <div>
                {photos.map((elem) => {
                    return (

                        <img src={elem.img_src} alt="rocks" />
                    )
                } ) }
            </div>

        </>
    );
};

export default Photos;