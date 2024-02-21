import Layout from "../../Layout";

const publicRoutes = [
  {
    element: <Layout />,
    children: [
      {
        path: "*",
        element: <>page not found</>,
      },
    ],
  },
];

export default publicRoutes;
