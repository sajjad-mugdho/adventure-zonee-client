import Blog from "../Blog/Blog";
import Login from "../User/Login";
import SignUp from "../User/SignUp";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layouts/Main");
const { default: Home } = require("../Home/Home/Home");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
           {
            path: '/',
            element: <Home></Home>
           },
           {
            path: '/login',
            element: <Login></Login>
           },
           {
            path: '/signup',
            element: <SignUp></SignUp>
           },
           {
            path:'/blog',
            element: <Blog></Blog>
           }

        ]
    }
])

export default router;