import React from 'react'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';

const Navbar = ({showLogin, setShowLogin, pageType}) => {
  const Navigate = useNavigate();
  const handleLogout=()=>{
    localStorage.clear();
    showLogin = true;
    Navigate('/login');
  }

  return (
    <div className='nav-container'>
        <Link to="/home" style={{ textDecoration: 'none' }}><div className='nav-brand'>Eco-Mart</div></Link>
        {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        
        <div className='nav-icons'>
        {pageType!=='landingPage' && <>
            <div>
              <Link to='/orderHistory'>
                <FontAwesomeIcon icon={faHistory} size="2x" color="white" />
              </Link>
            </div>
            <div>
              <Link to="/cart" >
                <FontAwesomeIcon icon={faShoppingCart} size="2x"color='white' />
              </Link>
            </div>
          </>}
          
          
          <div>
          {pageType==='landingPage' && <button onClick={()=>setShowLogin(!showLogin)}>Go to {showLogin ? 'Register': 'Login'}</button>}
          </div>

          <div>
            {pageType!=='landingPage' && <button onClick={()=>handleLogout()}>Logout</button>}
          </div>
        
          
       
        </div>

        
        
    </div>
  )
}

export default Navbar