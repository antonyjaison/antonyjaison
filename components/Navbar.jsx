"use client";

import styles from "@styles/navbar.module.scss";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const links = [
    { name: "_hello", link: "/" },
    { name: "_about-me", link: "/about" },
    { name: "_projects", link: "/projects" },
  ];

  const pathname = usePathname();
  return (
    <nav className={styles.header}>
      <div className={styles.header_links_left}>
        <Link className={styles.name_link} href="/">
          antonyjaison
        </Link>
        <div className={styles.page_links}>
          {links.map((link) => {
            return (
              <Link
                key={link.link}
                className={pathname === link.link ? styles.active_link : null}
                href={link.link}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
      <div className={styles.header_links_right}>
        <Link
          className={pathname === "/contact" ? styles.active_link : ""}
          href="/contact"
        >
          _contact-me
        </Link>
        <div className={styles.menu_icon}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
