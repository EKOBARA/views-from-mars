import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Moon = () => {

    const [moon, setMoon] = useState('');
    const url = 'https://api.kanye.rest';

    useEffect(() => {

       axios.get(url)
            .then((res) => {
                console.log(res.data.quote)
                setMoon(res.data.quote)
            })
            .then(() => console.error)

    }, [])
    return (
        <div className='ye'>
           {moon}

           <iframe width="0" height="0" src="https://www.youtube.com/embed/fMjasXiIhiQ?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           {/* <audio src="https://youtu.be/fMjasXiIhiQ"></audio> */}
        </div>
    );
};

export default Moon;