import {Suspense, lazy} from "react";
const { createBrowserRouter } = require("react-router-dom");
const Loading = <div>Loading...</div>;

const Join = lazy(() => import("../pages/join/Join"))
const ImageEditor = lazy(() => import("../pages/imageEditor/ImageEditor"))
const Login = lazy(() => import("../pages/login/Login"))

const root = createBrowserRouter([
  {
    path: "",
    element: <Suspense fallback={Loading}><ImageEditor/></Suspense>,
  },
  {
    path: "/join",
    element: <Suspense fallback={Loading}><Join /></Suspense>,
  },
  {
    path: "/login",
    element: <Suspense fallback={Loading}><Login /></Suspense>,
  }
]);

export default root;