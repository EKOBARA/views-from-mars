import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const Photos = ( ) => {

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
    return (
        <div>
            {photos.map((elem) => {
                return (
                    
                    <img src={elem.img_src} alt="rocks" />
                )
            } ) }
        </div>
    );
};

export default Photos;