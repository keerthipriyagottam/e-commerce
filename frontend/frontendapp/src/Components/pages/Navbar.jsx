import React from 'react'
import './navbar.css'

const Navbar = ({showLogin, setShowLogin}) => {
  return (
    <div className='nav-container'>
        <div className='nav-brand'>Eco-Mart</div>
        <div>
        <button onClick={()=>setShowLogin(!showLogin)}>Go to {showLogin ? 'Register': 'Login'}</button>
        </div>

        
        
    </div>
  )
}

export default Navbar