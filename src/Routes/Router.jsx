import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorePage/ErrorPage";
import Home from "../Pages/HomePage/Home/Home";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        }
      ]
    },
  ]);
  export default router;