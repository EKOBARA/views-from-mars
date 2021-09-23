import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Moon = () => {

    const [moon, setMoon] = useState('');
    const url = 'https://api.kanye.rest/';

    useEffect(() => {
       axios.get(url)
            .then((res) => {
                console.log(res)
                // setMoon(res.quote)
            })
            .then(() => console.error)

    }, [])
    return (
        <div style={{color: 'white'}}>
            hello from moon
        </div>
    );
};

export default Moon;