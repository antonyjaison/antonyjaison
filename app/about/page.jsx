import AccordionTab from "@components/AccordionTab";
import styles from "@styles/about.module.scss";
import profileData from "@data/profile";
import AboutInfo from "@components/AboutInfo";

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
            <AccordionTab section={section}  key={section.id}/>
          ))}
        </div>
      </div>

      <div className={styles.main_content}>
        <div className={styles.content}>
          <AboutInfo />
        </div>

        <div className={styles.code_content}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
          illum nemo maiores laudantium ipsa ab incidunt accusantium, ipsum
          aliquam dicta? Quam aut facere autem, eius eum sequi suscipit corrupti
          atque?
        </div>
      </div>

    </main>
  );
};

export default AboutPage;
