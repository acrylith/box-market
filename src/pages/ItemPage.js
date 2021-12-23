import React, { useEffect, useState } from 'react'
import ItemComments from '../components/page/ItemComments';
import ItemInfo from '../components/page/ItemInfo';

const ItemPage = (props) => {
    const [item, setItem] = useState([]);
    // eslint-disable-next-line
    const [error, setError] = useState("");
    // eslint-disable-next-line
    const [loaded, setLoaded] = useState(false);

    useEffect (() => {
        fetch(`http://localhost:4000/items/${props.match.params.id}`)
        .then(res => res.json())
        .then(
            (result) => {
                setLoaded(true);
                setItem(result)
            },

            (error) => {
                setLoaded(true);
                setError(error);
            },
        )// eslint-disable-next-line
    }, []);

    const info = {
        id: item.id,
        name: item.name,
        imageUrl: item.imageUrl,
        count: item.count,
        size: item.size,
        weight:item.weight
    }

    return (
        <div className='pageItem'>
            <ItemInfo info={info} />
            <ItemComments list={item.comments} />
        </div>
    )
}

export default ItemPage;