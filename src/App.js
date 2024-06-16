import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Main';
import About from './navFiles/About';
import Home from './navFiles/Home';
import Contact from './navFiles/Contact';
import CartProvider from './components/Store/ContextProvider';
import ProductDetail from './components/products/ProductDetail';
import AuthenticationPage from './Auth/Pages/AuthenticationPage';
import ProfilePage from './Auth/Pages/ProfilePage';
import { useState } from 'react';
import Cart from './components/Cart/Cart';


// const router = createBrowserRouter([
//   {path:'/',element:<Main/>},
//   {path:'/about',element:<About/>},
//   {path:'/home' , element:<Home/>}
// ]);

function App() {
    const [ShowCart,setShowCart] = useState(false);

    const handleShow = ()=>{
      setShowCart(true)
    }
    
    const handleHide = () => {
      setShowCart(false)
    }

    return(
      <CartProvider>
      {ShowCart && <Cart onhideCart = {handleHide} show={ShowCart} />}
      <Router>
        <Switch>
          <Route exact path='/'>
            <AuthenticationPage/>
          </Route>
          <Route exact path='/profile'>
          <ProfilePage/>
        </Route>
          <Route exact path='/store'>
            <Main onshow={handleShow} />
          </Route>
          <Route path='/about'>
            <About  onshow={handleShow} />
          </Route>
          <Route path='/home'>
            <Home   onshow={handleShow}/>
          </Route>

          <Route path='/contact'>
            <Contact  onshow={handleShow} />
          </Route>

          <Route path='/product/:productId'>
            <ProductDetail  onshow={handleShow}/>
          </Route>
        </Switch>
      </Router>
    </CartProvider>
  )

}



export default App;
