import React from 'react'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = ({showLogin, setShowLogin}) => {
  return (
    <div className='nav-container'>
        <div className='nav-brand'>Eco-Mart</div>
        
        <div className='nav-icons'>
        <div>
            <Link to="/cart" >
          <FontAwesomeIcon icon={faShoppingCart} size="2x"color='white' />
        </Link>
          </div>
          
          
          <div>
          <button onClick={()=>setShowLogin(!showLogin)}>Go to {showLogin ? 'Register': 'Login'}</button>
          </div>
        
          
       
        </div>

        
        
    </div>
  )
}

export default Navbar