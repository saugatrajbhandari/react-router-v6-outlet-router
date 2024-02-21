import { RouterProvider, createBrowserRouter } from "react-router-dom";
import authRoutes from "./routes/auth-routes";
import publicRoutes from "./routes/public-routes";
import privateRoutes from "./routes/private-routes";

const allRoutes = [...authRoutes, ...publicRoutes, ...privateRoutes];

const Router = () => {
  const router = createBrowserRouter(allRoutes);

  return <RouterProvider router={router} />;
};

export default Router;
