import boardRouter from "./boardRouter";
import { Suspense, lazy } from "react";
const { createBrowserRouter } = require("react-router-dom");
const Loading = <div>Loading...</div>;

const Join = lazy(() => import("../pages/join/Join"))
const Main = lazy(() => import("../pages/Main"))
const Login = lazy(() => import("../pages/login/Login"))
const ImageEditor = lazy(() => import("../pages/imageEditor/ImageEditor"))
const Auth = lazy(() => import("../pages/auth/AuthPage"))

const root = createBrowserRouter([
  {
    path: "",
    element: <Suspense fallback={Loading}><Main /></Suspense>,
  },
  {
    path: "auth",
    element: <Suspense fallback={Loading}><Auth /></Suspense>,
  },
  {
    path: "/join",
    element: <Suspense fallback={Loading}><Join /></Suspense>,
  },
  {
    path: "/login",
    element: <Suspense fallback={Loading}><Login /></Suspense>,
  },
  {
    path: "/image-editor",
    element: <Suspense fallback={Loading}><ImageEditor /></Suspense>,
  },
  {
    path: "board",
    children: boardRouter()
  },
]);

export default root;