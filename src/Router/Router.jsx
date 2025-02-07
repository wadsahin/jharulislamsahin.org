import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/Error/ErrorPage";
import AboutMe from "../Pages/About/AboutMe";
import Skills from "../Pages/Skills/Skills";
import Projects from "../Pages/Projects/Projects";
import Contact from "../Pages/Contact/Contact";
import ViewDetails from "../Components/Projects/ViewDetails/ViewDetails_1";
import ViewDetails_1 from "../Components/Projects/ViewDetails/ViewDetails_1";
import ViewDetails_2 from "../Components/Projects/ViewDetails/ViewDetails_2";
import ViewDetails_3 from "../Components/Projects/ViewDetails/ViewDetails_3";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about-me",
        element: <AboutMe></AboutMe>
      },
      {
        path: "/skills",
        element: <Skills></Skills>
      },
      {
        path: "/projects",
        element: <Projects></Projects>
      },
      {
        path: "/view-details/1",
        element: <ViewDetails_1></ViewDetails_1>
      },
      {
        path: "/view-details/2",
        element: <ViewDetails_2></ViewDetails_2>
      },
      {
        path: "/view-details/3",
        element: <ViewDetails_3></ViewDetails_3>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
    ]
  },
]);