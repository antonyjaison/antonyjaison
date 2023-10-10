import AccordionTab from "@components/AccordionTab";
import styles from "@styles/about.module.scss";
import profileData from "@data/profile";
import AboutInfo from "@components/AboutInfo";
import AboutImage from "@components/AboutImage";

const AboutPage = () => {
  return (
    <main className={styles.wrapper}>

      <h3 className={styles.page_name}>_about-me</h3>

      <div className={styles.sidebar}>
        <div className={styles.sidebar_left}>
          <img src="/icons/terminal.svg" alt="sidebar_img" />
          <img src="/icons/sidebar_icon2.svg" alt="sidebar_img" />
          <img src="/icons/sidebar_icon3.svg" alt="sidebar_img" />
        </div>
        <div className={styles.sidebar_right}>
          {profileData.map((section) => (
            <AccordionTab key={section.id} section={section}/>
          ))}
        </div>
      </div>

      <div className={styles.main_content}>
        <div className={styles.content}>
          <AboutInfo />
        </div>

        <div className={styles.code_content}>
          <AboutImage/>
        </div>
      </div>

    </main>
  );
};

export default AboutPage;
