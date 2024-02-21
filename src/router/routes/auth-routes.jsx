import { redirect } from "react-router-dom";
import Login from "../../login";

const loginStatus = false;

const authRoutes = [
  {
    path: "login",
    loader: () => {
      if (loginStatus) {
        throw redirect("/");
      }

      return null;
    },
    element: <Login />,
  },
];

export default authRoutes;
