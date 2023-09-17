import styles from "@styles/footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.main_wrapper}>
      <div className={styles.left_section}>
        <p className="nav_link_txt">find me in:</p>
        <Link href="#" className={styles.icon}>
          <img src="/icons/twitter.svg" alt="twitter" />
        </Link>
        <Link href="#" className={styles.icon}>
          <img src="/icons/fb.svg" alt="facebook" />
        </Link>
      </div>
      {/* <div className={styles.right_section}> */}
      <Link className={styles.right_section} href="#">
        <p className="nav_link_txt">@antonyjaison</p>
        <img src="/icons/github.svg" alt="github" />
      </Link>
      {/* </div> */}
    </footer>
  );
};

export default Footer;
