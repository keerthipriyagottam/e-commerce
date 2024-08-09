// ProductTile.js
import './ProductTile.css';
import { Link } from 'react-router-dom';
import { updateCart } from '../utility/updateCart';

const ProductTile = ({ reloadCartPage, pageType,id,image, title, price }) => {
  const handleDelete=async()=>{
    try {
      const response= await fetch(`http://localhost:8080/product/deleteProduct/${id}`,{
          method:'DELETE',
          headers:{'Content-Type': 'application/json'} 
      });
      if(response.ok) {
        console.log('Product deleted successfully');
        await reloadCartPage();
      } else {
          console.error('An error occurred while deleting product');
      }
    } catch (error) {
        console.error('Error:', error);
    }
  }

  const handleAddToCart=async ()=>{
    const userId=localStorage.getItem("userId");
    await updateCart(userId, id, 1);
  }

  return (
    <div className='product-main-container'>
      <div className='product-image'>
      <Link to={`/product/${id}`}><img src={image} alt='Thumbnail' className='product-image'/></Link>
      </div>
      <div className='product-title'>
        <Link to={`/product/${id}`}>{title}</Link></div>
      
      <div className='product-price'>Price: <strong>&#8377;{price}</strong></div>
      <div className='product-button'>
        {pageType!=='admin' && <button onClick={handleAddToCart}>Add to Cart</button>}
        {pageType==='admin' && <button onClick={handleDelete}>Delete Product</button>}
      </div>
    </div>
  );
};

export default ProductTile;
