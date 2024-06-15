import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Main';
import About from './navFiles/About';
import Home from './navFiles/Home';
import Contact from './navFiles/Contact';
import CartProvider from './components/Store/ContextProvider';
import ProductDetail from './components/products/ProductDetail';
import AuthenticationPage from './Auth/Pages/AuthenticationPage';
import ProfilePage from './Auth/Pages/ProfilePage';


// const router = createBrowserRouter([
//   {path:'/',element:<Main/>},
//   {path:'/about',element:<About/>},
//   {path:'/home' , element:<Home/>}
// ]);

function App() {

    return(
      <CartProvider>
      <Router>
        <Switch>
          <Route exact path='/'>
            <AuthenticationPage/>
          </Route>
          <Route exact path='/profile'>
          <ProfilePage/>
        </Route>
          <Route exact path='/store'>
            <Main />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>

          <Route path='/contact'>
            <Contact />
          </Route>

          <Route path='/product/:productId'>
            <ProductDetail/>
          </Route>
        </Switch>
      </Router>
    </CartProvider>
  )

}



export default App;
