import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import ProductDetail from './Components/ProductDetail';
import ProductTile from './Components/ProductTile';
import OrderDetails from './Components/OrderDetails';
import OrderHistory from './Components/OrderHistory';
import Register from './Components/pages/Authentication/Registration/Register';
import Home from './Components/pages/Home';


function App() {
  return (
    <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LandingPage />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
   
  );
}

export default App;
