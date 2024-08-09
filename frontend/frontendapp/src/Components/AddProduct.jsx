import React, { useState } from 'react';
import './AddProduct.css';
import AdminNavBar from './AdminNavBar';
import { toast } from 'react-toastify';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    shortDescription: '',
    bestSellingRank: '',
    thumbnailImage: '',
    salePrice: '',
    manufacturer: '',
    url: '',
    type: '',
    image: '',
    customerReviewCount: '',
    shipping: '',
    salePrice_range: '',
    objectID: '',
    categories: ''
  });

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setProduct({...product,[name]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/product/addProducts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify([{...product,categories:product.categories.split(',')}])
      });
      if (response.ok) {
        console.log('Product added successfully');
        toast.success('Product added successfully');
        setProduct({
          name: '',
          shortDescription: '',
          bestSellingRank: '',
          thumbnailImage: '',
          salePrice: '',
          manufacturer: '',
          url: '',
          type: '',
          image: '',
          customerReviewCount: '',
          shipping: '',
          salePrice_range: '',
          objectID: '',
          categories: ''
        });
      } else {
        alert('Error adding product');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error adding product');
    }
  };

  return (
    <div className='add-product-page'>
        <AdminNavBar/>
        <div className="add-product-container">
            <h2>Add Product</h2>
            <form className="add-product-form" onSubmit={handleSubmit}>
                <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={product.name} onChange={handleChange} required/>
                </div>
                <div className="form-group">
                <label htmlFor="shortDescription">Short Description:</label>
                <input type="text" id="shortDescription" name="shortDescription"  value={product.shortDescription} onChange={handleChange} required/>
                </div>
                <div className="form-group">
                <label htmlFor="bestSellingRank">Best Selling Rank:</label>
                <input type="number" id="bestSellingRank" name="bestSellingRank" value={product.bestSellingRank} onChange={handleChange} required/>
                </div>
                <div className="form-group">
                <label htmlFor="thumbnailImage">Thumbnail Image URL:</label>
                <input type="text" id="thumbnailImage" name="thumbnailImage" value={product.thumbnailImage} onChange={handleChange}/>
                </div>
                <div className="form-group">
                <label htmlFor="salePrice">Sale Price:</label>
                <input type="number" id="salePrice" name="salePrice" value={product.salePrice} onChange={handleChange} required/>
                </div>
                <div className="form-group">
                <label htmlFor="manufacturer">Manufacturer:</label>
                <input type="text" id="manufacturer" name="manufacturer" value={product.manufacturer} onChange={handleChange} required/>
                </div>
                <div className="form-group">
                <label htmlFor="url">Product URL:</label>
                <input type="url" id="url" name="url" value={product.url} onChange={handleChange}/>
                </div>
                <div className="form-group">
                <label htmlFor="type">Type:</label>
                <input type="text" id="type" name="type" value={product.type} onChange={handleChange}/>
                </div>
                <div className="form-group">
                <label htmlFor="image">Image URL:</label>
                <input type="text" id="image" name="image" value={product.image} onChange={handleChange}/>
                </div>
                <div className="form-group">
                <label htmlFor="customerReviewCount">Customer Review Count:</label>
                <input type="number" id="customerReviewCount" name="customerReviewCount" value={product.customerReviewCount} onChange={handleChange}/>
                </div>
                <div className="form-group">
                <label htmlFor="shipping">Shipping:</label>
                <input type="text" id="shipping" name="shipping" value={product.shipping} onChange={handleChange}/>
                </div>
                <div className="form-group">
                <label htmlFor="salePrice_range">Sale Price Range:</label>
                <input type="text" id="salePrice_range" name="salePrice_range" value={product.salePrice_range} onChange={handleChange}/>
                </div>
                <div className="form-group">
                <label htmlFor="objectID">Object ID:</label>
                <input type="text" id="objectID" name="objectID" value={product.objectID} onChange={handleChange}/>
                </div>
                <div className="form-group">
                <label htmlFor="categories">Categories:</label>
                <input type="text" id="categories" name="categories" value={product.categories} onChange={handleChange}/>
                </div>
                <button type="submit" className="submit-button">Add Product</button>
            </form>
        </div>
    </div>
    
  );
};

export default AddProduct;
