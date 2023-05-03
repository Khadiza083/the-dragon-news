import { createBrowserRouter } from "react-router-dom";

import Header from "../shared/Header/Header";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Main/>,
            children: [
                {
                    path: '/',
                    element: <Home/>
                },
                {
                    path: 'header',
                    element: <Header/>
                }
            ]
        }
    ]
)

export default router;
