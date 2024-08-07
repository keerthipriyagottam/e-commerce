import React, { useState } from 'react'
import Register from './pages/Authentication/Registration/Register.jsx'
import Navbar from './pages/Navbar.jsx'
import ProductTile from './ProductTile.jsx';
import Home from './pages/Home.jsx';

const LandingPage = () => {
    const [showLogin, setShowLogin] = useState(true);
    // const[showprofile,setShowprofile]=useState(true);


    
    
    return (
        <div>
            <Navbar showLogin={showLogin} setShowLogin={setShowLogin} />
            <Register showLogin={showLogin} />
            {/* <ProductTile/> */}
        </div>
    )
}

export default LandingPage