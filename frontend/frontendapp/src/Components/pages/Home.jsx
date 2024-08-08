import React, { useState ,useEffect}  from 'react'
import Navbar from './Navbar'
import ProductTile from '../ProductTile'
import './Home.css'
import Shoppingcart from '../Shoppingcart'
import ProductDetail from '../ProductDetail'

const Home = () => {
    const[products,setProducts]=useState([]);
    const getAllProducts=async()=>{
        try {
            const response= await fetch('http://localhost:8080/product/allProducts',{
                method:'GET',
                headers:{'Content-Type': 'application/json'} 
            });
            if(response.ok) {
                const allproducts= await response.json();
                setProducts(allproducts);console.log(allproducts[0])

            } else {
                console.error('An error occurred while fetching products');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
    useEffect(
        ()=>{
            getAllProducts();
        }, []);

  return (
    <div>
        <Navbar/>
        <div className='products-container' >
            {products.map((product)=>(
                <ProductTile id={product._id} title={product.name} image={product.image} price={product.salePrice}/>
            ))}
        </div>
        
    </div>
  )
}

export default Home