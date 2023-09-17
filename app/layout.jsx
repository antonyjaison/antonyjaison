import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Antony Jaison - Full Stack Web Developer Portfolio",
  description:
    "Explore the journey of Antony Jaison, a passionate Full Stack Web Developer and 3rd-year IT engineering student. Discover a world of creativity, innovation, and coding excellence through a showcase of projects, skills, and experiences. Join me on this digital odyssey as I transform ideas into web solutions that make a difference.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
