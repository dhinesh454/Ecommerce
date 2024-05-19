import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Main from './Main';
import About from './navFiles/About';
import Home from './navFiles/Home';


const router = createBrowserRouter([
  {path:'/',element:<Main/>},
  {path:'/about',element:<About/>},
  {path:'/home' , element:<Home/>}
]);

function App() {

    return(
      <RouterProvider router={router}/>
    )

}



export default App;
