import {Route,Switch} from 'react-router-dom'
import Main from './Main';
import About from './navFiles/About';
import Home from './navFiles/Home';
import Contact from './navFiles/Contact';


// const router = createBrowserRouter([
//   {path:'/',element:<Main/>},
//   {path:'/about',element:<About/>},
//   {path:'/home' , element:<Home/>}
// ]);

function App() {

    return(
      
      <Switch>
        <Route exact path='/'>
          <Main/>
        </Route>

        <Route path='/about'>
          <About/>
        </Route>

        <Route path='/home'>
          <Home/>
        </Route>

        <Route path='/contact'>
           <Contact/>
        </Route>

      </Switch>
    )

}



export default App;
