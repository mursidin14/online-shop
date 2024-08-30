import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Layout = lazy(() => import("../layout/Layout"));
const Home = lazy(() => import("../pages/Home"));
import Shop from "../pages/Shop";
import AbouteUs from "../pages/AbouteUs";
import Contact from "../pages/Contact";
import DetailProduct from "../pages/DetailProduct";
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
