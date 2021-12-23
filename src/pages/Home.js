import React from 'react'
import { useState } from 'react/cjs/react.development';
import AddModal from '../components/AddModal';
import ItemList from '../components/list/ItemList';

const Home = () => {
    let [showAdd, setShowAdd] = useState(false);
    const [lastId, setLastId] = useState(0)
    return (
        <div className='pageHome'>
            <ItemList setLastId={setLastId} />
            <div className='add__wrapper'>
                <button className='confirm-button' onClick={() => setShowAdd(true)}>Add Item</button>
            </div>
            {showAdd === true &&
                <AddModal lastId={lastId} modalToggle={setShowAdd}/>
            }
        </div>
    )
}

export default Home;