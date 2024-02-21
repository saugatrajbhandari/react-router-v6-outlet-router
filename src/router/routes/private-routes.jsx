import { redirect } from "react-router-dom";
import Layout from "../../layout";

const loginStatus = true;

const privateRoutes = [
  {
    element: <Layout />,
    loader: () => {
      if (!loginStatus) {
        throw redirect("/login");
      }
      return null;
    },

    children: [
      {
        path: "/",
        element: <>home</>,
      },

      {
        path: "/profile",
        element: <>profile</>,
      },
    ],
  },
];

export default privateRoutes;
