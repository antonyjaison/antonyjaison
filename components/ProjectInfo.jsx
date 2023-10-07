import styles from "@styles/projectInfo.module.scss";
import ProjectCard from "./ProjectCard";

const ProjectInfo = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.tab}>
                    <p><span className={styles.folder_name}>// personal info /</span><span> LOEM</span></p>
                    <img src="/icons/close.svg" alt="close-icon" />
                </div>
            </div>

            <div className={styles.body}>
                <ProjectCard/>
            </div>
        </div>
    )
}

export default ProjectInfo