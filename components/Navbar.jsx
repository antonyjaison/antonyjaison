"use client";

import styles from "@styles/navbar.module.scss";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animateLinks, setAnimateLinks] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    setAnimateLinks(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "scroll" : "hidden";
    menuRef.current.style.display = isOpen ? "none" : "flex";
  };

  const close = () => {
    if (window.innerWidth <= 886) {
      setTimeout(() => {
        setIsOpen(!isOpen);
        document.body.style.overflow = "scroll";
        menuRef.current.style.display = "none";
      }, 1000);
    }
  };

  const links = [
    { name: "_hello", link: "/" },
    { name: "_about-me", link: "/about" },
    { name: "_projects", link: "/projects" },
  ];

  const pathname = usePathname();
  return (
    <>
      <nav className={styles.header}>
        <div className={styles.header_links_left}>
          <Link className={styles.name_link} href="/" onClick={() => close()}>
            antony-jaison
          </Link>
          <div
            ref={menuRef}
            className={`${styles.page_links} ${
              animateLinks ? styles.animate_links : styles.animate_links_reverse
            }`}
          >
            {links.map((link) => {
              return (
                <Link
                  key={link.link}
                  className={pathname === link.link ? styles.active_link : null}
                  href={link.link}
                  onClick={() => close()}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              onClick={() => close()}
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
        <div className={isOpen ? styles.bg_dim_active : styles.bg_dim}></div>
      </nav>
    </>
  );
};

export default Navbar;
