import React from 'react'
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='nav'>
            <div className='container'>
                <div className='nav__body'>
                    <h1>Box-Market</h1>
                    <NavLink className='nav__link' to='/'>Home</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Nav;