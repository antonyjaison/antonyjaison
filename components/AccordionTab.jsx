"use client";

import styles from "@styles/accordionTab.module.scss";
import Link from "next/link";

import { useDispatch,useSelector } from "react-redux";
import { addDetails } from "@features/about/aboutSlice";

const AccordionTab = ({ section }) => {
  const dispatch = useDispatch()
  const data = useSelector(state => state.about.about)
  console.log(data)

  const isFolder = (type) => {
    if (type === "file" || type === "data" || type === "link") {
      return false;
    } else return true;
  };

  const makeImage = (imgFor) => {
    switch (imgFor) {
      case "x":
        return "x.svg";
      case "bio":
        return "bio.svg";
      case "education":
        return "bio.svg";
      case "interests":
        return "bio.svg";
      case "email":
        return "mail.svg";
      case "phone":
        return "phone.svg";
      case "instagram":
        return "instagram.svg";
      case "linkedin":
        return "linkedin.svg";
      case "facebook":
        return "facebook.svg";
      case "x":
        return "bio.svg";
      case "skills":
        return "bio.svg";
      case "hobbie":
        return "bio.svg";
      default:
        return "x.svg";
    }
  };

  const addToAboutStore = (data) => {
    dispatch(addDetails(data))
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.outer_tab}>
        <input type="checkbox" name="accordion-1" id={section.id} />

        <div className={styles.outer_label}>
          <label for={section.id}>
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
            <div className={styles.tab_content}>
              {isFolder(data.type) && (
                <input
                  type="checkbox"
                  name="inner-accordion-1"
                  id={`i-${data.id}`}
                />
              )}

              {data.type === "link" ? (
                <>
                  <Link href={data.href} className={styles.inner_label}>
                    <label for={`i-${data.id}`}>
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
                  <div className={styles.inner_label}>
                    <label for={`i-${data.id}`}>
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
                    <div onClick={() => {
                      addToAboutStore(item)
                      console.log(item)
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
