import styles from "@styles/accordionTab.module.scss";

const AccordionTab = ({ section }) => {
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

        {section.content.map((data) => {
          return (
            <div class={styles.tab_content}>
              <input
                type="checkbox"
                name="inner-accordion-1"
                id={`i-${data.id}`}
              />

              <div className={styles.inner_label}>
                <label for={`i-${data.id}`}>
                  <img
                    className={styles.sub_arrow_img}
                    src="/icons/sub_accordion_icon.svg"
                    alt="arrow"
                  />
                  <img src="/icons/bio.svg" alt="arrow" />
                  {data.name}
                </label>
              </div>

              <div class={styles.inner_tab_content}>
                {data.content.map((item) => {
                  return (
                    <div className={styles.inner_tab}>
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
