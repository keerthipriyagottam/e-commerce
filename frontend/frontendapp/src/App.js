import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import OrderHistory from './Components/OrderHistory';
import Home from './Components/pages/Home';
import ProductDetailpage from './Components/ProductDetailpage.jsx';
import CartPage from './Components/CartPage';
import AdminHome from './Components/AdminHome.jsx';
import AddProduct from './Components/AddProduct.jsx';
import DeleteProducts from './Components/DeleteProducts.jsx';


function App() {
  return (
    <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LandingPage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetailpage/>}/>
                <Route path='/cart' element={<CartPage/>}/>
                <Route path='/orderHistory' element={<OrderHistory/>}/>
                <Route path='/admin/addProduct' element={<AddProduct/>}/>
                <Route path='/admin/home' element={<AdminHome/>}/>
                <Route path='/admin/deleteProduct' element={<DeleteProducts/>}/>
            </Routes>
        </Router>
   
  );
}

export default App;
