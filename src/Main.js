


import { useState , useCallback, useEffect } from 'react';
import Navigation from './components/Navigation'
import Header from './components/Header';
import Product from './components/products/Product';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';


function Main() {

const [ShowCart,setShowCart] = useState(false);
const [products,setProducts] = useState([]);


const  fetchProductHandler =useCallback(async()=>{
  try {
    const response = await fetch('https://ecommerce-5696a-default-rtdb.firebaseio.com/product.json');
    if (!response.ok) {
      throw new Error('Fetching product error, please check again');
    }
    const data = await response.json();

    const Productsitems = Object.keys(data).map(key => ({
      id: key,
      title: data[key].title,
      price: data[key].price,
      imageUrl: data[key].imageUrl,
    }));
    
    setProducts(Productsitems);
  } catch (error) {
    console.error(error);
  }
  
},[]);

useEffect(()=>{
  fetchProductHandler();

},[fetchProductHandler])


const handleShow = ()=>{
  setShowCart(true)
}

const handleHide = () => {
  setShowCart(false)
}
  return (
  <>
    {ShowCart && <Cart onhideCart = {handleHide} show={ShowCart} />}
    <Navigation onshow={handleShow}/>
     <Header/>
    <Product products={products}/>
    <Footer/>
  </>

  );
}



export default Main;

