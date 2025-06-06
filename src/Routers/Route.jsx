import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
    {
    path: "/account/login",
    element: <Login></Login>
    },{
      path: "/account/register",
      element: <Register></Register>
    }
    ]
  },
 
]);

export default router;
