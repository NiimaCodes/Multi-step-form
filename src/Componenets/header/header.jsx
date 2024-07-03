import React from 'react'
import './header.css'
const header = () => {
    return (
        <>
            <header>
                <div className='header-container container'>
                       <h1 className='header-heading'>Empowering Future Tech Leaders</h1>
                       <p className='header-text'>Empowering young women to excel in technology,
                         fostering confidence and skills for future innovation.</p>
                    <div className='header-button'><button>Become a member</button></div>
                </div>
            </header>
        </>
    )
}

export default header