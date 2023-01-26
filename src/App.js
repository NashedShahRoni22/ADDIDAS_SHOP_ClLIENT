import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ProductDetails from './components/ProductDetails';
import Main from './layouts/Main';
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/products',
          element:<Products/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/product/:id',
          element:<ProductDetails/>
        },
      ]
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
