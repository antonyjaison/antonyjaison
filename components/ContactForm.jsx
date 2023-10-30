"use client";

import styles from "@styles/contactForm.module.scss";
import { useDispatch } from "react-redux";
import {
  onchangeEmail,
  onchangeName,
  onchangetext,
} from "@features/contact/contactSlice";
import { useRef, useState } from "react";

const ContactForm = () => {
  const [isSubmit, setIsSubmit] = useState(false);

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const messageRef = useRef(null);

  const dispatch = useDispatch();

  const changeEmail = (e) => {
    emailInputRef.current.style.border = "1px solid var(--text-color-cmt)";
    dispatch(onchangeEmail(e.target.value));
  };
  const changeName = (e) => {
    nameInputRef.current.style.border = "1px solid var(--text-color-cmt)";
    dispatch(onchangeName(e.target.value));
  };
  const changeText = (e) => {
    dispatch(onchangetext(e.target.value));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (nameInputRef.current.value === "") {
      nameInputRef.current.style.border = "1px solid red";
    }
    if (emailInputRef.current.value === "") {
      emailInputRef.current.style.border = "1px solid red";
    }

    if (nameInputRef.current.value && emailInputRef.current.value) {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nameInputRef.current.value,
          email: emailInputRef.current.value,
          message: messageRef.current.value,
        }),
      });
      const json = await res.json();
      if (json.body.status) {
        setIsSubmit(true);
        setTimeout(() => {
            setIsSubmit(false);
        },3000)
      }
    }
  };

  return (
    <>
      {isSubmit ? (
        <div className={styles.success_wrapper}>
            <h3>Thank you! 🤘</h3>
            <p>Your message has been accepted. You will recieve answer really soon!</p>
        </div>
      ) : (
        <form className={styles.wrapper}>
          <div className={styles.input_group}>
            <label htmlFor="name">_name</label>
            <input
              ref={nameInputRef}
              onChange={changeName}
              type="text"
              id="name"
            />
          </div>
          <div className={styles.input_group}>
            <label htmlFor="email">_email</label>
            <input
              ref={emailInputRef}
              onChange={changeEmail}
              type="email"
              id="email"
            />
          </div>
          <div className={styles.input_group}>
            <label htmlFor="message">_message</label>
            <textarea
              ref={messageRef}
              onChange={changeText}
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <input onClick={onSubmit} type="submit" value="submit-message" />
        </form>
      )}
    </>
  );
};

export default ContactForm;
