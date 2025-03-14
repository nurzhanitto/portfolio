import "../Styles/Projects.css"
import ProjectItem from "./ProjectItem";
import ProjectList from "../Helper/ProjectList";

const Projects = () => {
    return <>
        <div className="projects">
            <h1>My Personal Projects</h1>
            <div className="projectList">
                {ProjectList.map(project => {
                    return <ProjectItem image={project.image} name={project.name} link={project.link} key={project.name}/>
                })}
            </div>
        </div>
    </>
}

export default Projects