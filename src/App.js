import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Layouts/Main';
import Home from './Components/Home/Home';
import Orders from './Components/Orders/Orders';
import About from './Components/About/About';
import Grandpa from './Components/Grandpa/Grandpa.js';


function App() {
  const router = createBrowserRouter([
      {
        path:'/', 
        element:<Main></Main>,
        children: [
          {
            path:'/',
            element:<Home></Home>
          }
          ,{
            path:'/orders',
            element:<Orders></Orders>
          },
          {
            path:'/about',
            element:<About></About>
          },
          {
            path:'/grandpa',
            element:<Grandpa></Grandpa>
          },
        ]
      },
  ])
  return (
    <div className="App">
      <RouterProvider router ={router}></RouterProvider>
    </div>
  );
}

export default App;
