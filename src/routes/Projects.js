import projects from '../proj.json'
import {Switch, Route, Link, useRouteMatch} from 'react-router-dom'
import Project from './Project'

let Projects = () =>{
    let { path, url } = useRouteMatch();
    console.log("path: "+path)
    console.log("url: "+url)
    return (
        <>
        {projects.map(({name,size,id})=>{return(
        <div>
            <h1>Project: <Link to={`${url}/${id}`} >{name}</Link></h1>
            <p>size: {size}</p>
        </div>
        )}
        )}
       
        </>
    );
}

export default Projects;