import {
    createBrowserRouter,
} from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/error-page/ErrorPage";
import Login from "../pages/auth-page/Login";



export const router = createBrowserRouter([
    //normal routes
    {
        path: '',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'register',
                element: <div>Register page</div>
            }
        ]
    }

]);