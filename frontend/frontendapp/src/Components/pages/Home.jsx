import React, { useState ,useEffect}  from 'react'
import Navbar from './Navbar'
import ProductTile from '../ProductTile'
import './Home.css'

const Home = () => {
    const[triggerEffect,setTriggerEffect]=useState(false);
    const[products,setProducts]=useState([]);
    const getAllProducts=async()=>{
        try {
            const response= await fetch('http://localhost:8080/product/allProducts',{
                method:'GET',
                headers:{'Content-Type': 'application/json'} 
            });
            if(response.ok) {
                const allproducts= await response.json();
                setProducts(allproducts);

            } else {
                console.error('An error occurred while fetching products');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
    const toggleTriggerEffect=() => {
        setTriggerEffect(prevState => !prevState);
      };

    useEffect(
        ()=>{
            getAllProducts();
        }, [triggerEffect]);

  return (
    <div>
        <Navbar/>
        <div className='products-container' >
            {products.map((product)=>(
                <ProductTile key={product._id} reloadCartPage={toggleTriggerEffect} id={product._id} title={product.name} image={product.image} price={product.salePrice}/>
            ))}
        </div>
        
    </div>
  )
}

export default Home