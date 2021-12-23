import React from 'react'

const ItemInfo = (props) => {
    if(props.info.size) {
        return (
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-xl-4 col-xl-8'>
                        <div className='info'>
                            <div className='info__img-wrapper'>
                                <img src={props.info.imageUrl} alt={props.info.name} />
                            </div>
                            <h2>{props.info.name}</h2>
                            <p>Left: {props.info.count} items</p>
                            <div className='info__size'>
                                <p>Height: {props.info.size.height} cm</p>
                                <p>Width: {props.info.size.width} cm</p>
                            </div>
                            <p>Weight: {props.info.weight}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return(
            <h1>Loading</h1>
        )
    }
}

export default ItemInfo;