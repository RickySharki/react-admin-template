import { useLocation, Navigate } from "react-router-dom";
import { rootRouter } from "@/routers/index";
import { useUserInfo } from "@/hooks/useUserInfo";
import { searchRoute } from "./searchRoute";

/**
 * @description 路由守卫组件
 * */
const AuthRouter = (props: { children: JSX.Element }) => {
  const user = useUserInfo();
  const { token } = user;
  const { pathname } = useLocation();
  const route = searchRoute(pathname, rootRouter);
  // 路由不存在跳转404
  if (!route) return <Navigate to="/404" />;
  // * 判断当前路由是否需要访问权限(不需要权限直接放行)
  if (!route.meta?.requiresAuth) return props.children;

  // * 判断是否有Token
  if (!token) return <Navigate to="/login" replace />;

  // * 当前账号有权限返回 Router，正常访问页面
  return props.children;
};

export default AuthRouter;
