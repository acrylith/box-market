import React from 'react'

const ItemComments = (props) => {
    const renderComment = (comm) => {
        return(
            <div className='comm' key={comm.id}>
                <div className='comm__heading'>
                    <p className='comm__id'>#{comm.id}</p>
                    <p className='comm__date'>{comm.date}</p>
                </div>
                <hr/>
                <div className='comm_body'>
                    <p>{comm.description}</p>
                </div>
            </div>
        )
    }

    if (props.list) {
        return (
            <div className='container'>
                <div className='comments'>
                    {props.list.map(renderComment)}
                </div>
            </div>
        )
    } else {
        return(
            <div className='container'>
                <h1>No Comments</h1>
            </div>
        )
    }    
}

export default ItemComments