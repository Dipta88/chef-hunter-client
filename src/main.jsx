import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main.jsx';

import Home from './components/Home.jsx';
import About from './About.jsx';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';
import Error from './Error.jsx';
import ChefsRecipe from './ChefsRecipe.jsx';
import Blog from './components/Blog.jsx';
import AuthProvider from './firebase/providers/AuthProvider';
import Privateroute from './components/PrivateRoute';
import Secret from './Secret';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element : <Home></Home>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '*',
        element: <Error></Error>
      },
      {
        path: 'chefsrecipe',
        element: <Privateroute><ChefsRecipe></ChefsRecipe></Privateroute>
      },
      {
      path: 'secret',
      element: <Privateroute><Secret></Secret></Privateroute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider> <RouterProvider router={router} /></AuthProvider>
 
  </React.StrictMode>,
)
