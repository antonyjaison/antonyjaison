"use client";

import styles from "@styles/aboutInfo.module.scss";
import { useSelector } from "react-redux";

const AboutInfo = () => {
  const data = useSelector((state) => state.about.about)[0];
  let text = data?.text;
  let lineCount = 1;

  text = text?.split("\n");

  console.log(data)

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.tab}>
          <p>{data?.name}</p>
          <img src="/icons/close.svg" alt="close-icon" />
        </div>
      </div>

      <div className={styles.body}>
        {text?.map((line) => {
          return (
            <div className={styles.code_wrapper}>
              <div className={styles.code_line_num}>
                <p>{lineCount++}</p>
              </div>
              <div className={styles.star}>
                <p>*</p>
              </div>
              <div className={styles.commented_code}>
                <p>{line}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutInfo;
