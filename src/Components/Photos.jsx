import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';


const Photos = ( {cameras, date} ) => {

    const { rover } = useParams();
    const { cam } = useParams();

    const [photos, setPhotos] = useState([]);

    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${date}&camera=${cam}&api_key=${process.env.REACT_APP_ROVER_KEY}`

    useEffect(() => {

       axios.get(url)
            .then((res) => {
                const arr = res.data.photos;
                setPhotos(arr)
            })
            .catch(() => console.error)
    }, [cam])
    


    return (
        <>
        <nav className='camera'>

            {cameras.map((elem, idx) => {
                return (
                    <Link to={`/${rover}/${elem.name}`}>
	    	 	        <button className='rover' key={idx} >{elem.name}</button>
	    	        </Link>
                    )   
                })}

        </nav> 
        <div className='photos'>

            {photos.length ? 
                photos.map((elem, idx) => {
                    return (
                        <div >
                            <img key={idx} className='photo' src={elem.img_src} alt="rocks" />
                        </div>
                        )
                    }) 
                    :
                    <p className='white' >No photos taken</p>  
            }

        </div>
        </>
    );
}


export default Photos;