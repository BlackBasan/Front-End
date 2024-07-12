import { Outlet, createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "a/b/c",
        element: <div>HELLO <Outlet /></div>,
        children: [
            {
                path: 'd/e/f',
                element: <div>WORLD</div>,
                
            }
        ]
    },
]);
