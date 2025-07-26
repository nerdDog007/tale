import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import  Entertain from "../pages/Entertain";
import News from "../pages/news";
import  Business from "../pages/business";
import Health from "../pages/health";
import  Technology from "../pages/technology.jsx";
import Category from "../pages/Category";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>Error</div>,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/news",
    element: <News/>,
  },
  {
    path: "/entertainment",
    element: <Entertain />,
  },
  {
    path: "/business",
    element: <Business />,
  },
  {
    path: "/health",
    element: <Health/>,
  },
  {
    path: "/technology",
    element: <Technology/>,
  },
  {
    path: "/:id",
    element: <Category/>,
  },
  {
    path: "/*",
    element: <div>404</div>,
  },
])

export default routes;