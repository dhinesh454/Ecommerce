


import { useState } from 'react';
import Navigation from './components/Navigation'
import Header from './components/Header';
import Product from './components/products/Product';
import Cart from './components/Cart/Cart';
import CartProvider from './components/Store/ContextProvider';
import Footer from './components/Footer/Footer';


function Main() {

const [ShowCart,setShowCart] = useState(false);


const handleShow = ()=>{
  setShowCart(true)
}

const handleHide = () => {
  setShowCart(false)
}
  return (
<CartProvider>
 {ShowCart && <Cart onhideCart = {handleHide} show={ShowCart} />}
    <Navigation onshow={handleShow}/>
     <Header/>
    <Product/>
    <Footer/>
</CartProvider>

  );
}



export default Main;

