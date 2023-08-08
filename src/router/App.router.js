import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Components/MainPage/MainPage";

export const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<MainPage />
    },

])