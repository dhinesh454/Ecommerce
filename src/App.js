import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';
import Main from './Main';
import About from './navFiles/About';
import Home from './navFiles/Home';
import Contact from './navFiles/Contact';
import ProductDetail from './components/products/ProductDetail';
import AuthenticationPage from './Auth/Pages/AuthenticationPage';
import ProfilePage from './Auth/Pages/ProfilePage';
import { useContext, useEffect, useState } from 'react';
import Cart from './components/Cart/Cart';
import CartContext from './components/Store/CartContext';


// const router = createBrowserRouter([
//   {path:'/',element:<Main/>},
//   {path:'/about',element:<About/>},
//   {path:'/home' , element:<Home/>}
// ]);

function App() {

    
    const authCtx = useContext(CartContext)
    const [ShowCart,setShowCart] = useState(false);

    useEffect(()=>{
      console.log(authCtx)
    },[authCtx]);

    const handleShow = ()=>{
      setShowCart(true)
    }
    
    const handleHide = () => {
      setShowCart(false)
    }

    return(
      <>
      {ShowCart && <Cart onhideCart = {handleHide} show={ShowCart} />}
      <Router>
        <Switch>
         {!authCtx.isLoggedIn && <Route exact path='/login'>
            <AuthenticationPage/>
          </Route>}
          <Route exact path='/profile'>
            {authCtx.isLoggedIn ?  <ProfilePage onshow={handleShow}/> : <Redirect to='/login'/>}
          </Route>
          <Route exact path='/store'>
            {authCtx.isLoggedIn ?  <Main onshow={handleShow} />: <Redirect to='/login'/>}
           
          </Route>
          <Route path='/about'>
            {authCtx.isLoggedIn ? <About  onshow={handleShow} />: <Redirect to='/login'/>}  
          </Route>
         <Route path='/' exact>
            {authCtx.isLoggedIn ? <Home   onshow={handleShow}/>: <Redirect to='/login'/>}    
          </Route>

          <Route path='/contact'>
            {authCtx.isLoggedIn ? <Contact/>: <Redirect to='/login'/>}    
          </Route>

          <Route path='/product/:productId'>
            <ProductDetail  onshow={handleShow}/>
          </Route>

          <Route path="*">
            <Redirect to={authCtx.isLoggedIn ? "/" : "/login"} />
          </Route>

        </Switch>
      </Router>
    </>
  )

}



export default App;
