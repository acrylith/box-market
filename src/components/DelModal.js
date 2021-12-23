import React, {useEffect, useState, useContext} from 'react';
import context from '../context';

const DelModal = (props) => {
    const [delConfirm, setDelConfirm] = useState(false);
    const {refresher} = useContext(context);
    const {setRefresh} = refresher;
    useEffect(() => {
        if(delConfirm === true){
            fetch(`http://localhost:4000/items/${props.info.id}`, { method: 'DELETE' });
            exitWithRefresh();
        }// eslint-disable-next-line
    }, [delConfirm]);

    const exitWithRefresh = () => {
        props.modalToggle(false);
        setRefresh(+new Date());
    }

    return (
        <div className='modal__background'>
            <div className='modal__body'>
                <h1>Do you want to delete {props.info.name}?</h1>
                <div className='del-confirm'>
                    <button className='cancel-button' onClick={() => setDelConfirm(true)}>Delete</button>
                    <button className='more-button' onClick={() => props.modalToggle(false)}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default DelModal;