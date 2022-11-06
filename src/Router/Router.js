import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddEvent from "../Pages/AddEvent/AddEvent";
import AddEventDetails from "../Pages/AddEvent/AddEventDetails";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";

export const router =createBrowserRouter([
    {
        path:'/',
        element: <Main />,
        children:[
            {
                path:'/',
                loader:()=>fetch('http://localhost:5000/users'),
                element: <Home />
            },
            {
                path:'/login',
                 element:<Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
              path:'/event',
              element: <AddEventDetails />
              
            },
            {
                path:'/event/:id',
                loader:({params})=>fetch(`http://localhost:5000/users/${params.id}`),
                 element: <AddEvent />
            }
   
        ]
    }
])