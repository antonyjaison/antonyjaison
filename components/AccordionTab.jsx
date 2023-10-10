"use client";

import styles from "@styles/accordionTab.module.scss";

import Link from "next/link";
import { useDispatch } from "react-redux";
import { addDetails } from "@features/about/aboutSlice";
import { useEffect } from "react";

// utils
import makeImage from "@utils/makeImage";

const AccordionTab = ({ section }) => {

  const dispatch = useDispatch()

  const isFolder = (type) => !["file", "data", "link", "image"].includes(type);

  const addToAboutStore = (data) => {
    if (data.type !== 'folder') {
      dispatch(addDetails(data))
    }
  }

  useEffect(() => {

    if (section.title === 'personal-info') {
      const personalId = section.id;
      const personalInputTag = document.getElementById(personalId);

      section.content.map(data => {
        if (data.for === 'bio') {
          const bioId = data.id; // Use data.id for bio
          const bioInputTag = document.getElementById(bioId);

          if (bioInputTag) {
            bioInputTag.checked = true;
          }
          addToAboutStore(data.content[0])
        }
      })

      if (personalInputTag) {
        personalInputTag.checked = true;
      }
    } else if (section.title === 'images') {
      const imagesId = section.id;
      const imagesInputTag = document.getElementById(imagesId);

      if (imagesInputTag) {
        imagesInputTag.checked = true;
      }
      addToAboutStore(section.content[0])

    }
  }, [section.id, section.title, section.content]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.outer_tab}>
        <input type="checkbox" name="accordion-1" id={section.id} />

        <div className={styles.outer_label}>
          <label htmlFor={section.id}>
            <img
              className={styles.arrow_img}
              src="/icons/arrow.svg"
              alt="arrow"
            />
            {section.title}
          </label>
        </div>

        {section.content?.map((data) => {
          return (
            <div key={data.id} className={styles.tab_content}>
              {isFolder(data.type) && (
                <input
                  type="checkbox"
                  name="inner-accordion-1"
                  id={data.id}
                />
              )}

              {data.type === "link" ? (
                <>
                  <Link key={data.id} href={data.href} className={styles.inner_label}>
                    <label htmlFor={data.id}>
                      {isFolder(data.type) && (
                        <img
                          className={styles.sub_arrow_img}
                          src="/icons/sub_accordion_icon.svg"
                          alt="arrow"
                        />
                      )}
                      <img src={`/icons/${makeImage(data.for)}`} alt="arrow" />
                      {data.name}
                    </label>
                  </Link>
                </>
              ) : (
                <>
                  <div onClick={() => {
                    addToAboutStore(data)
                  }
                  } className={styles.inner_label}>
                    <label htmlFor={data.id}>
                      {isFolder(data.type) && (
                        <img
                          className={styles.sub_arrow_img}
                          src="/icons/sub_accordion_icon.svg"
                          alt="arrow"
                        />
                      )}
                      <img src={`/icons/${makeImage(data.for)}`} alt="arrow" />
                      {data.name}
                    </label>
                  </div>
                </>
              )}

              <div className={styles.inner_tab_content}>
                {data.content?.map((item) => {
                  return (
                    <div key={item.id} onClick={() => {
                      addToAboutStore(item)
                    }} className={styles.inner_tab}>
                      <img src="/icons/txt.svg" alt="" />
                      <p>{item.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AccordionTab;
