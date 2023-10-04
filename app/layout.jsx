"use client"

import "./globals.css";
import styles from "@styles/rootLayout.module.scss";
import { Fira_Code } from "next/font/google";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import { Provider } from "react-redux";
import { store } from "./store";

const fira = Fira_Code({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fira.className}>
        <main className={styles.main_wrapper}>
          <Provider store={store}>
            <Navbar />
            <main className={styles.children}>{children}</main>
            <Footer />
          </Provider>
        </main>
      </body>
    </html>
  );
}
