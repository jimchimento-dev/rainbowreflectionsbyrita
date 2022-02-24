import { useState, useEffect } from 'react';
import axios from 'axios';

const useEventsData = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/events')
            .then(res => {
                setEvents(res.data)
            })
            .catch(err => {
                console.log(err);
            });
    }, [])

    return [events];
}



export default useEventsData;