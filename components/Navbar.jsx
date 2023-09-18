"use client";

import styles from "@styles/navbar.module.scss";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
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
          <Link
            className={styles.mobile_contact_link}
            href="/contact"
          >
            _contact-me
          </Link>
        </div>
      </div>
      <div className={styles.header_links_right}>
        <Link
          className={pathname === "/contact" ? styles.active_link : ""}
          href="/contact"
        >
          _contact-me
        </Link>
        <button
          className={`${styles.menu_icon} ${isOpen ? styles.open : ""}`}
          onClick={toggleMenu}
        >
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
