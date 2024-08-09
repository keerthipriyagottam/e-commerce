import React, { useState ,useEffect}  from 'react'
import AdminNavBar from './AdminNavBar'
import ProductTile from './ProductTile';

const DeleteProducts = () => {
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
    useEffect(
        ()=>{
            getAllProducts();
        }, []);
  return (
    <>
        <AdminNavBar/>
        <div className='products-container' >
            {products.map((product)=>(
                <ProductTile pageType='admin' key={product._id} id={product._id} title={product.name} image={product.image} price={product.salePrice}/>
            ))}
        </div>
    </>
  )
}

export default DeleteProducts