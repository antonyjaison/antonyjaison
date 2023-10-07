import styles from '@styles/projectCard.module.scss'

const ProjectCard = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <h4><span>Project 1</span> // _ui_animations</h4>
            </div>
            <div className={styles.card}>
                <div className={styles.project_img}>
                    <img src="/images/project_2.png" alt="" />
                    <div className={styles.project_type_img}>
                        <img src="/icons/react.svg" alt="" />
                    </div>
                </div>

                <div className={styles.project_details}>
                    <p>Duis aute irure dolor in velit esse cillum dolore.</p>
                    <div className={styles.project_buttons}>
                        <a href="#">
                            View project
                        </a>
                        <a href="#">
                            View repository
                        </a>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ProjectCard