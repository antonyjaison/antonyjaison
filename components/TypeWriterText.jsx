"use client";

import React, { useEffect } from "react";
import styles from "@styles/typeWriter.module.scss";
import Typewriter from "typewriter-effect/dist/core";

const TypeWriterText = () => {

  const trackUser = async () => {
    const apiRes = await fetch("https://api.ipify.org?format=json");
    const data = await apiRes.json();

    try {
      const res = await fetch("/api/track", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          ip: data.ip,
        }),
      });
      console.log(res);
      if (res.ok) {
        console.log("Yeai!");
      } else {
        console.log("Oops! Something is wrong.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const typewriter = new Typewriter("#typewriter", {
      strings: [
        "> Full-stack developer",
        "> UI/UX designer",
        "> Open-source contributor",
        "> Tech enthusiast",
      ],
      autoStart: true,
      loop: true,
    });

    trackUser();

    return () => {
      typewriter.stop();
    };
  }, []);

  return <p id="typewriter" className={styles.typewriter_text}></p>;
};

export default TypeWriterText;
