import styles from "@styles/projectCard.module.scss";
import Link from "next/link";

const ProjectCard = ({ name, description, image, link, repo, type }) => {
  const project_image = image
    ? `/images/projects/${image}`
    : "/images/project_2.png";

  var project_type = "";

  switch (type) {
    case "react":
      project_type = (
        <div className={styles.project_type_img}>
          <img src="/icons/react.svg" alt="react" />
        </div>
      );
      break;

    case "nextjs":
      project_type = (
        <div
          style={{ backgroundColor: "#fff" }}
          className={styles.project_type_img}
        >
          <img src="/icons/nextjs.svg" alt="nexj" />
        </div>
      );
      break;
    case "vuejs":
      project_type = (
        <div
          style={{ backgroundColor: "#81D4AF" }}
          className={styles.project_type_img}
        >
          <img src="/icons/vue.svg" alt="vue" />
        </div>
      );
      break;
    case "vanilajs":
      project_type = (
        <div
          style={{ backgroundColor: "#81D4AF" }}
          className={styles.project_type_img}
        >
          <img src="/icons/js.svg" alt="js" />
        </div>
      );
      break;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h4>
          <span>Project 1</span> // {name}
        </h4>
      </div>
      <div className={styles.card}>
        <div className={styles.project_img}>
          <img src={project_image} alt="" />

          {/* <div className={styles.project_type_img}>
            <img src="/icons/react.svg" alt="" />
          </div> */}
          {project_type}
        </div>

        <div className={styles.project_details}>
          <p>{description}</p>
          <div className={styles.project_buttons}>
            {link && <Link href={link}>View project</Link>}
            <Link href={repo}>View repository</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
