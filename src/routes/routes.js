/*lazyLoading was blocking me from getting the height before painting the DOM 
with use LayoutEffect*/

//import { lazy } from "react";
import { useLocation } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Project from "./Project";
import APIS from "./APIS";
/*const About = lazy(() => import("./About"));
const Projects = lazy(() => import("./Projects"));
const Project = lazy(() => import("./Project"));
const APIS = lazy(() => import("./APIS"));*/

let routes = [
  {
    route: "/",
    Component: Home,
    options: {
      exact: true,
      strict: true,
    },
  },
  {
    route: "/about",
    Component: About,
    options: {
      exact: true,
      strict: true,
    },
  },
  {
    route: "/projects",
    Component: Projects,
    options: {
      exact: true,
      strict: true,
    },
  },
  {
    route: "/projects/:id",
    Component: Project,
    options: {},
  },
  {
    route: "/api",
    Component: APIS,
    options: {},
  },
  {
    route: "*",
    Component: () => {
      let location = useLocation();
      console.log(location);
      return (
        <h1>
          no url match
          <br /> pathname : {location.pathname} <br /> search :{" "}
          {location.search || "none"} <br /> hash : {location.hash || "none"}
        </h1>
      );
    },
  },
];

export default routes;
