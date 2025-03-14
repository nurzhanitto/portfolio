const ProjectItem = ({image, name, link}) => {
    return <>
        <div className="projectItem">
        <a style={{ textDecoration: "none", color: "black" }} href={link} target="_blank" rel="noopener noreferrer">
            <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
            <h1 style={{ marginTop: "20px" }}>{name}</h1>
        </a>
        </div>
    </>
}

export default ProjectItem