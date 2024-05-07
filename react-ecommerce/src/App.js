import React from 'react';
import Counter from './features/counter/Counter';
import './App.css';
import ProductList from './features/product/components/ProductList';
import Login from './features/auth/components/Login';
import CartPage from './features/cart/Cart'
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import ProductDetailPage from './pages/ProductDetailPage';
import Signup from './features/auth/components/Signup';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/signup",
    element: <Signup></Signup>
  },
  {
    path: "/cart",
    element: <CartPage></CartPage>
  },
  {
    path: "/checkout",
    element: <Checkout></Checkout>
  },
  {
    path: "/product-detail",
    element: <ProductDetailPage></ProductDetailPage>
  }

])

function App() {
  return (
    <div className="App">
    {/* <Home></Home> */}
    {/* <Login></Login> */}
    <RouterProvider router={router} />
    {/* <Signup></Signup> */}
    </div>
  );
}

export default App;
