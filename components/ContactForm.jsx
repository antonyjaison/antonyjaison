'use client'

import styles from '@styles/contactForm.module.scss'
import { useDispatch } from 'react-redux'
import { onchangeEmail, onchangeName, onchangetext } from '@features/contact/contactSlice'
import { useRef } from 'react'


const ContactForm = () => {

    const nameInputRef = useRef(null)
    const emailInputRef = useRef(null)

    const dispatch = useDispatch()

    const changeEmail = (e) => {
        emailInputRef.current.style.border = "1px solid var(--text-color-cmt)"
        dispatch(onchangeEmail(e.target.value))
    }
    const changeName = (e) => {
        nameInputRef.current.style.border = "1px solid var(--text-color-cmt)"
        dispatch(onchangeName(e.target.value))
    }
    const changeText = (e) => {
        dispatch(onchangetext(e.target.value))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        console.log(nameInputRef.current.value)

        if (nameInputRef.current.value === "") {
            nameInputRef.current.style.border = "1px solid red"
        }
        if (emailInputRef.current.value === "") {
            emailInputRef.current.style.border = "1px solid red"
        }

        if (nameInputRef.current.value && emailInputRef.current.value) {
            console.log({
                name: nameInputRef.current.value,
                email: emailInputRef.current.value
            })
        }
    }

    return (
        <form className={styles.wrapper}>
            <div className={styles.input_group}>
                <label htmlFor="name">_name</label>
                <input ref={nameInputRef} onChange={changeName} type="text" id='name' />
            </div>
            <div className={styles.input_group}>
                <label htmlFor="email">_email</label>
                <input ref={emailInputRef} onChange={changeEmail} type="email" id='email' />
            </div>
            <div className={styles.input_group}>
                <label htmlFor="message">_message</label>
                <textarea onChange={changeText} name="message" id="message" cols="30" rows="10"></textarea>
            </div>
            <input onClick={onSubmit} type="submit" value="submit-message" />
        </form>
    )
}

export default ContactForm