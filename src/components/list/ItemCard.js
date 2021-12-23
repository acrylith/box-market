import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import DelModal from '../DelModal';

const ItemCard = (props) => {
    const [showDel, setShowDel] = useState(false)

    return (
        <div className='col-xl-4 col-md-6'>
            <div className='card' id={props.details.id}>
                <div className='card__image-wrapper'>
                    <img src={props.details.imageUrl} alt={props.details.name} />
                </div>
                <h3 className='card__title'>
                    {props.details.name}
                    {props.details.count < 1 &&
                        <span className='out'>(Out of stock!)</span>
                    }
                </h3>
                <div className='card__buttons'>
                    <button className='cancel-button' onClick={() => setShowDel(true)}>Delete</button>
                    <NavLink className='more-button' to={`/item/${props.details.id}`}>More...</NavLink>
                </div>
                {showDel === true &&
                    <DelModal info={props.details} modalToggle={setShowDel} />
                }
            </div>
        </div>
    )
}

export default ItemCard;