import React, { useState ,useEffect}  from 'react'
import Navbar from './Navbar'
import ProductTile from '../ProductTile'
import './Home.css'

const Home = () => {
    const[triggerEffect,setTriggerEffect]=useState(false);
    const[products,setProducts]=useState([]);
    const[filteredProducts,setFilteredProducts]=useState([]);
    const[searchString,setSearchString]=useState('');
    const toggleTriggerEffect=()=>{
        setTriggerEffect(prevState => !prevState);
    }

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

    const handleSearch=(e)=>{
        setSearchString(e.target.value);

    }

    const filterProducts=()=>{
        setFilteredProducts(products.filter(p=>p.name.toLowerCase().includes(searchString.toLowerCase())));
    }

    useEffect(()=>{filterProducts()},[searchString, products])
    
    useEffect(
        ()=>{
            getAllProducts();
        }, [triggerEffect]);

    return (
        <div>
            <Navbar/>
            <div className='search-bar'>
                <label htmlFor="name">Search </label>
                <input type="text" name="search-string" value={searchString} onChange={handleSearch}></input>
            </div>
            <div className='products-container' >
                {filteredProducts.map((product)=>(
                    <ProductTile key={product._id} reloadPage={toggleTriggerEffect} id={product._id} title={product.name} image={product.image} price={product.salePrice}/>
                ))}
            </div>
        </div>
    )
}

export default Home