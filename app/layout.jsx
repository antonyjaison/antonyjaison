import "./globals.css";
import styles from "@styles/rootLayout.module.scss";
import { Fira_Code } from "next/font/google";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";

const fira = Fira_Code({ subsets: ["latin"] });

export const metadata = {
  title: "Antony Jaison - Full Stack Web Developer Portfolio",
  description:
    "Explore the journey of Antony Jaison, a passionate Full Stack Web Developer and 3rd-year IT engineering student. Discover a world of creativity, innovation, and coding excellence through a showcase of projects, skills, and experiences. Join me on this digital odyssey as I transform ideas into web solutions that make a difference.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fira.className}>
        <main className={styles.main_wrapper}>
          <Navbar />
          <main>{children}</main>
          <Footer/>
        </main>
      </body>
    </html>
  );
}
