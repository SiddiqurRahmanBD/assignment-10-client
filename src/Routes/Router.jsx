import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AuthLayout from "../Layout/AuthLayout";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import AvailableFoods from "../Pages/AvailableFoods";
import AddFood from "../Pages/AddFood";

const router = createBrowserRouter([
    {
        path:"/",
        Component: MainLayout,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:"/available-foods",
                Component:AvailableFoods
            },
            {
                path:"/add-food",
                Component:AddFood
            }

        ]
    },
    {
        path:"/auth",
        Component: AuthLayout,
        children:[
            {
                path:"/auth/register",
                Component:Register
            },
            {
                path:"/auth/login",
                Component:Login
            },

        ]
    }

]);
export default router;