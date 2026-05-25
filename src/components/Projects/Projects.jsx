import { useSelector } from "react-redux";
import ProjectCard from "./ProjectCard";

function Projects() {

  const { content } = useSelector((state) => state.theme);
  const projectData = content.projects;

  return (
    <section id="projects" className="pt-10 pb-22.5">
      <h2>
        {projectData?.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-30 w-full">
        <ProjectCard/>
      </div>
    </section>
  );
}

export default Projects;