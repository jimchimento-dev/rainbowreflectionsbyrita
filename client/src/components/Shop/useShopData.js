import { useState, useEffect } from 'react';
import axios from 'axios';

const useShopData = () => {

    const [shopItems, setShopItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/shop')
            .then(res => {
                setShopItems(res.data)
            })
            .catch(err => {
                console.log(err);
            });
    }, [])

    return [shopItems];
}



export default useShopData;