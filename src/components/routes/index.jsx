import Layout from "../../Layout";
import Home from "../../pages/Home";
import Dashboard from "../../pages/Dashboard";
import Articles from "../../pages/Articles";
import Projects from "../../pages/Projects";
import Qna from "../../pages/Qna";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Dashboard",
        element: <Dashboard />,
      },
      {
        path: "/Articles",
        element: <Articles />,
      },
      {
        path: "/Projects",
        element: <Projects />,
      },
      {
        path: "/Qna",
        element: <Qna />,
      },
    ],
  },
];

export default routes;
