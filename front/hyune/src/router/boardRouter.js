import { Suspense, lazy } from "react";
const Loading = <div>Loading...</div>
const BoardAdd = lazy(() => import("../pages/board/BoardAddPage"))
const BoardList = lazy(() => import("../pages/board/BoardListPage"))
const BoardRead = lazy(() => import("../pages/board/BoardReadPage"))
const boardRouter = () => {
    return [
        {
            path: "",
            element: <Suspense fallback={Loading}><BoardList /></Suspense>
          },
        {
            path:"add",
            element: <Suspense fallback={Loading}><BoardAdd/></Suspense>
        },
        {
            path:"read/:id",
            element: <Suspense fallback={Loading}><BoardRead/></Suspense>
        },
    ]
}

export default boardRouter;