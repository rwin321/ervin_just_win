import PItem from "../../common/PItem/PItem";
import { projects } from "../../data/projectsData";

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="projects__title">
        <span> Projects</span>
      </h2>
      <main className="projects__cards">
        {projects &&
          projects.map((project, id) => (
            <PItem
              key={project.id}
              title={project.title}
              description={project.description}
              img={project.img}
              path={project.path}
            />
          ))}
      </main>
    </section>
  );
};

export default Projects;
