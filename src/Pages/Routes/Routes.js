import AddServices from "../AddServices/AddServices";
import Blog from "../Blog/Blog";
import ServiceDetails from "../Home/Services/ServiceDetails";
import ServicePage from "../Home/Services/ServicePage";
import Reviews from "../Reviews/Reviews";
import Login from "../User/Login";
import SignUp from "../User/SignUp";
import PrivateRoutes from "./PrivateRoutes";

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
           },
           {
            path: '/services/:id',
            element: <PrivateRoutes><ServiceDetails></ServiceDetails></PrivateRoutes>,
            loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
           },
           {
            path: '/reviews',
            element:<PrivateRoutes> <Reviews></Reviews></PrivateRoutes>,
           
           },
           {
            path: '/add-services',
            element:<PrivateRoutes> <Reviews></Reviews></PrivateRoutes>
           },
           {
            path: '/services-page',
            element: <PrivateRoutes><ServicePage></ServicePage></PrivateRoutes>,
           }

        ]
    }
])

export default router;