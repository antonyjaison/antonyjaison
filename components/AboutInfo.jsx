import styles from "@styles/aboutInfo.module.scss";

const AboutInfo = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.tab}>
          <p>personal-info</p>
          <img src="/icons/close.svg" alt="close-icon" />
        </div>
      </div>

      <div className={styles.body}>

      </div>
    </div>
  );
};

export default AboutInfo;
