import styles from "@styles/projectInfo.module.scss";
import ProjectCard from "./ProjectCard";
import projects from "@data/projects";

const ProjectInfo = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.tab}>
          <p>
            <span className={styles.folder_name}>//</span>projects
          </p>
          <img src="/icons/close.svg" alt="close-icon" />
        </div>
      </div>

      <div className={styles.body}>
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              name={project.name}
              description={project.description}
              image={project.image}
              link={project.live}
              repo={project.repo}
              type={project.type}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectInfo;
