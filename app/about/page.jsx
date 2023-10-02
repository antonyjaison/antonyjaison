import AccordionTab from "@components/AccordionTab";
import styles from "@styles/about.module.scss";
import profileData from "@data/profile";

const AboutPage = () => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.sidebar}>
        <div className={styles.sidebar_left}>
          <img src="/icons/terminal.svg" alt="sidebar_img" />
          <img src="/icons/sidebar_icon2.svg" alt="sidebar_img" />
          <img src="/icons/sidebar_icon3.svg" alt="sidebar_img" />
        </div>
        <div className={styles.sidebar_right}>
          {profileData.map((section) => (
            <AccordionTab section={section} />
          ))}
        </div>
      </div>
      <div className={styles.content}></div>
      <div className={styles.code_content}></div>
    </main>
  );
};

export default AboutPage;
