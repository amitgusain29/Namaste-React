import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import emailjs from 'emailjs-com';
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import ContactForm from "./components/ContactForm"; // Import the form

// Initialize EmailJS
emailjs.init("wLG3s46BtoqVkveTz");

const Grocery = lazy(() => import("./components/ContactForm"))
const About = lazy(() => import("./components/About"))

const AppLayout = () => {

    const [userName, setUserName] = useState()

    // Authentication
    useEffect(() => {
        const data = {
            name: "Amit Gusain",
        }
        setUserName(data.name)
    }, [])


    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
                <div className="app">
                    <Header />
                    <Outlet />
                </div >
            </UserContext.Provider>
        </Provider>
    )
}


const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            }, {
                path: "/about",
                element: <Suspense fallback={<h1>Loading..</h1>}><About /></Suspense>,
            }, {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/contactform",
                element: <ContactForm />,  // Show ContactForm on Contact Page
            },            
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            },
            {
                path: "/cart",
                element: <Cart />,
            }
        ],
        errorElement: <Error />
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={AppRouter} />)

