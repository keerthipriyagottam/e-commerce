export async function updateCart(userId,cartItems){
    const response= await fetch(`http://localhost:8080/cart/update/${userId}`,{
        method:'POST',
        headers:{'Content-Type': 'application/json'} ,
        body: JSON.stringify({items: cartItems})
    });
}
