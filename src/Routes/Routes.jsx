import {
    createBrowserRouter,
} from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/error-page/ErrorPage";
import Login from "../pages/auth-page/Login";
import Register from "../pages/auth-page/Register";
import MealDetails from "../pages/meal-details-page/MealDetails";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import AllMeals from "../pages/all-meals-page/AllMeals";
import DashboardLayout from "../layout/DashboardLayout";
import UserProfile from "../dashboard-pages/user-profile-page/UserProfile";
import Private from "./Private";
import UsersReview from "../dashboard-pages/my-reviews-page/UsersReview";
import ReviewEdit from "../dashboard-pages/review-edit-page/ReviewEdit";


const axiosPublic = useAxiosPublic();


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
                path: 'meals',
                element: <AllMeals />
            },
            {
                path: 'meal-details/:id',
                element: <MealDetails />,
                loader: ({ params }) => axiosPublic.get(`/meals/${params.id}`)
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    },
    //dashboard routes
    {
        path: 'dashboard',
        element: <Private> <DashboardLayout /></Private>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'user-profile',
                element: <UserProfile />
            },
            {
                path: 'users-review',
                element: <UsersReview />,
            },
            {
                path:'review-edit',
                element:<ReviewEdit/>
            }
        ]
    }

]);