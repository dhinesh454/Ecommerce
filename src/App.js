import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Main from './Main';
import About from './navFiles/About';
import Home from './navFiles/Home';
import Contact from './navFiles/Contact';
import ProductDetail from './components/products/ProductDetail';
import AuthenticationPage from './Auth/Pages/AuthenticationPage';
import ProfilePage from './Auth/Pages/ProfilePage';
import {  useContext,useState } from 'react';
import Cart from './components/Cart/Cart';
import CartContext from './components/Store/CartContext';

function App() {
  const authCtx = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);

  // const fetchCartItems = useCallback(async () => {
  //   const localid = localStorage.getItem('localId');

  //   try {
  //     const response = await fetch(`https://ecommerce-5696a-default-rtdb.firebaseio.com/items/${localid}.json`);
  //     if (!response.ok) {
  //       throw new Error('Fetching cart error, please check again');
  //     }
  //     const data = await response.json();
  //     const fetchedItems = [];

  //     for (const key in data) {
  //       fetchedItems.push({
  //         key: key,
  //         id: data[key].id,
  //         title: data[key].title,
  //         amount: data[key].amount,
  //         price: data[key].price,
  //         imageurl: data[key].imageurl,
  //       });
  //     }

  //     authCtx.setItems(fetchedItems);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [authCtx]);

  // useEffect(() => {
   
  //     fetchCartItems();
  
  // }, [fetchCartItems]);

  const handleShow = () => {
    setShowCart(true);
  };

  const handleHide = () => {
    setShowCart(false);
  };

  return (
    <>
      {showCart && <Cart onhideCart={handleHide} show={showCart} />}
      <Router>
        <Switch>
          {!authCtx.isLoggedIn && (
            <Route exact path='/login'>
              <AuthenticationPage />
            </Route>
          )}
          <Route exact path='/profile'>
            {authCtx.isLoggedIn ? <ProfilePage onshow={handleShow} /> : <Redirect to='/login' />}
          </Route>
          <Route exact path='/store'>
            {authCtx.isLoggedIn ? <Main onshow={handleShow} /> : <Redirect to='/login' />}
          </Route>
          <Route path='/about'>
            {authCtx.isLoggedIn ? <About onshow={handleShow} /> : <Redirect to='/login' />}
          </Route>
          <Route path='/' exact>
            {authCtx.isLoggedIn ? <Home onshow={handleShow} /> : <Redirect to='/login' />}
          </Route>
          <Route path='/contact'>
            {authCtx.isLoggedIn ? <Contact /> : <Redirect to='/login' />}
          </Route>
          <Route path='/product/:productId'>
            <ProductDetail onshow={handleShow} />
          </Route>
          <Route path='*'>
            <Redirect to={authCtx.isLoggedIn ? '/' : '/login'} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
