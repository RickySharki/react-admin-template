import { Navigate, useRoutes } from "react-router-dom";
import { RouteObject } from "@/routers/interface";
import Login from "@/views/login";
import Error from "@/components/error/404";
import LayoutContainer from "@/layout";
import Content from "@/views/content";

export const rootRouter: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: <Login />,
    meta: {
      requiresAuth: false,
      title: "登录页",
      key: "login",
    },
  },
  {
    element: <LayoutContainer />,
    children: [
      {
        path: "/content",
        element: <Content />,
        meta:{
          requiresAuth: true,
          title: "内容页",
          key: "content",
        }
      },
    ],
  },
  {
    path: "/404",
    element: <Error />,
    meta: {
      requiresAuth: false,
      title: "404页面",
      key: "404",
    },
  },
  {
    path: "*",
    element: <Navigate to="/404" />,
  },
];

const Router = () => {
  const routes = useRoutes(rootRouter);
  return routes;
};

export default Router;
