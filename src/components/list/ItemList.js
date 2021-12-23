import React, { useEffect, useState, useContext } from 'react';
import context from '../../context';
import ItemCard from './ItemCard';

const ItemList = (props) => {
    const [items, setItems] = useState([]);
    // eslint-disable-next-line
    const [error, setError] = useState("");
    // eslint-disable-next-line
    const [loaded, setLoaded] = useState(false);
    const {refresher} = useContext(context);
    const {refresh} = refresher;

    useEffect (() => {
        fetch("http://localhost:4000/items")
        .then(res => res.json())
        .then(
            (result) => {
                setLoaded(true);
                setItems(result)
            },

            (error) => {
                setLoaded(true);
                setError(error);
            },
        )
    }, [refresh]);

    if(items[items.length-1] !== undefined){
        props.setLastId(items[items.length-1].id);
    }

    return (
        <div className='list'>
            <div className='container'>
                <div className='row'>
                    {items.map(item => (
                        <ItemCard key={item.id} details={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ItemList;