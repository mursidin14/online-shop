import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import AbouteUs from "../pages/AbouteUs";
import Contact from "../pages/Contact";
import DetailProduct from "../pages/DetailProduct";
import Layout from "../layout/Layout";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path:'/',
                element: <Home />
            },
            {
                path:'/shop',
                element: <Shop />
            },
            {
                path:'/aboute',
                element: <AbouteUs />
            },
            {
                path:'/contact',
                element: <Contact />
            },
            {
                path:'/products/:id',
                element: <DetailProduct />
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])
