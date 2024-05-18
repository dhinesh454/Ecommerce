import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Main from './Main';
import About from './navFiles/About';


const router = createBrowserRouter([
  {path:'/',element:<Main/>},
  {path:'/about',element:<About/>}
]);

function App() {

    return(
      <RouterProvider router={router}/>
    )

}



export default App;
