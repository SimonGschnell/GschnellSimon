import { useParams, useRouteMatch } from "react-router-dom";

let Project = (props) => {
  let { path, url } = useRouteMatch();
  let { id } = useParams();
  console.log("path: " + path);
  console.log("url: " + url);
  return <h1>project with id : {id}</h1>;
};

export default Project;
