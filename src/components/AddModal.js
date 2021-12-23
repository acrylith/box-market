import React, {useState, useEffect, useContext} from 'react'
import context from '../context'

const AddModal = (props) => {
    const [name, setName] = useState("")
    const [count, setCount] = useState("")
    const [width, setWidth] = useState("")
    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")
    const [image, setImage] = useState("")

    const [submit, setSubmit] = useState(false)

    const {refresher} = useContext(context);
    const {setRefresh} = refresher;

    useEffect(() => {
        if(submit === true){
            const itemDetails = {
                id: props.lastId + 1,
                imageUrl: image,
                name: name,
                count: count,
                size: {
                width: width,
                height: height
                },
                weight: weight,
                comments: ""
            }

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(itemDetails)
            }

            fetch('http://localhost:4000/items', requestOptions)
            exitWithRefresh();
        }// eslint-disable-next-line
    }, [submit]);

    const exitWithRefresh = () => {
        props.modalToggle(false);
        setRefresh(+new Date());
    }

    const check = () => {
        if(
            name !== "" && count !== "" && width !== "" &&
            height !== "" && weight !== "" && image !== ""){
                setSubmit(true)
            } else {
                alert("Fill all the fields!")
            }
    }

    return (
        <div className='modal__background'>
            <div className='modal__body add__body'>
                <h1 className='add__title'>Add Item</h1>
                <div className='add__inputs'>
                    <div className='add__input'>
                        <label htmlFor='name123'>Name</label>
                        <input id='name123' type='text' onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className='add__input'>
                        <label htmlFor='count123'>Count</label>
                        <input id='count132' type='text' onChange={(e) => setCount(e.target.value)} />
                    </div>

                    <div className='add__input'>
                        <label htmlFor='width123'>Width</label>
                        <input id='width123' type='text' onChange={(e) => setWidth(e.target.value)} />
                    </div>

                    <div className='add__input'>
                        <label htmlFor='height123'>Height</label>
                        <input id='height123' type='text' onChange={(e) => setHeight(e.target.value)} />
                    </div>

                    <div className='add__input'>
                        <label htmlFor='weight123'>Weight</label>
                        <input id='weight123' type='text' onChange={(e) => setWeight(e.target.value)} />
                    </div>

                    <div className='add__input'>
                        <label htmlFor='image123'>Image URL</label>
                        <input id='image123' type='text' onChange={(e) => setImage(e.target.value)} />
                    </div>
                </div>
                <div className='add__confirm'>
                    <button className='confirm-button' onClick={() => check()}>Confirm</button>
                    <button className='cancel-button' onClick={() => props.modalToggle(false)}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default AddModal