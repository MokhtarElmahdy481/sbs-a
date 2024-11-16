import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./RootLayout";
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import ProductsPage from "../pages/ProductsPage";
import CareersPage from "../pages/CareersPage";
import ContactsUs from "../pages/ContactsUs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: 'our-services',
                element: <ServicesPage/>,
            },
            {
                path: 'our-products',
                element: <ProductsPage/>,
            },
            {
                path: 'careers',
                element: <CareersPage/>,
            },
            {
                path: 'contact-us',
                element: <ContactsUs/>,
            },
        ]
    }
])

export const RouterPages = () => {
    return <RouterProvider router={router} />
}