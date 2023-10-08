import AccordionTab from "@components/AccordionTab";
import styles from "@styles/contact.module.scss";
import contactData from "@data/contact";
import ContactForm from "@components/ContactForm";
import ContactCodeSection from "@components/ContactCodeSection";

const ContactPage = () => {
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
          {contactData.map((section) => (
            <AccordionTab section={section} key={section.id} />
          ))}
        </div>
      </div>

      <div className={styles.main_content}>
        <div className={styles.content}>

          <div className={styles.header}>
            <div className={styles.tab}>
              <p>Contact</p>
              <img src="/icons/close.svg" alt="close-icon" />
            </div>
          </div>

          <div className={styles.contact_form}>
            <ContactForm />
          </div>

        </div>

        <div className={styles.code_content}>
          <ContactCodeSection />
        </div>
      </div>

    </main>
  )
}

export default ContactPage