import styles from "@styles/homepage.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.details}>
        <div className={styles.name_section}>
          <h3>Hi all. I am</h3>
          <h1>Antony Jaison</h1>
          <h2>{"> Full-stack developer"}</h2>
        </div>
        <div className={styles.github_section}>
          <p>// you can also see it on my Github page</p>
          <p>
            const githubLink =
            <Link href="https://github.com/antonyjaison/">
              “https://github.com/antonyjaison/
            </Link>
          </p>
        </div>
      </div>
      <div className={styles.code_section}></div>
    </main>
  );
}
