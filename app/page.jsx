// import SnakeGame from "@components/SnakeGame";
import TypeWriterText from "@components/TypeWriterText";
import styles from "@styles/homepage.module.scss";
import Link from "next/link";

export const metadata = {
  title: "Antony Jaison - Full Stack Web Developer Portfolio",
  description:
    "Explore the journey of Antony Jaison, a passionate Full Stack Web Developer and 3rd-year IT engineering student. Discover a world of creativity, innovation, and coding excellence through a showcase of projects, skills, and experiences. Join me on this digital odyssey as I transform ideas into web solutions that make a difference.",
};

export default async function Home() {

  return (
    <main className={styles.wrapper}>
      <div className={styles.details}>
        <div className={styles.details_div}>
          <div className={styles.name_section}>
            <h3>Hi all, I am</h3>
            <h1 className={styles.desktop}>Antony Jaison</h1>
            <h1 className={styles.name_mob}>Antony <br /> Jaison</h1>
            <TypeWriterText />
          </div>

          <div className={styles.github_section}>
            <p>// you can also see it on my Github page</p>
            <p className={styles.github_link}>
              <span className={styles.data_type}>const </span><span className={styles.variable_name}>githubLink</span><span> = </span>
              <Link href="https://github.com/antonyjaison/">
                <span className={styles.string}>
                  "https://github.com/antonyjaison/"
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.code_section}>
        {/* <SnakeGame /> */}
      </div>
    </main>
  );
}
