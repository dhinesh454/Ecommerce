
import { useState } from 'react';
import Navigation from './components/Navigation'
import Header from './components/Header';
import Product from './components/products/Product';
import Cart from './components/Cart/Cart';


function App() {

const [ShowCart,setShowCart] = useState(false);


const handleShow = ()=>{
  setShowCart(true)
}

const handleHide = () => {
  setShowCart(false)
}
  return (
<div>
 {ShowCart && <Cart onhideCart = {handleHide} show={ShowCart} />}
    <Navigation onshow={handleShow}/>
     <Header/>
    <Product/>
</div>

    // <div>
    
    // </div>
  );
}



export default App;
