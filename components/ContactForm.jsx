'use client'

import styles from '@styles/contactForm.module.scss'
import { useDispatch } from 'react-redux'
import { onchangeEmail, onchangeName, onchangetext } from '@features/contact/contactSlice'



const ContactForm = () => {

    const dispatch = useDispatch()

    const changeEmail = (e) => {
        dispatch(onchangeEmail(e.target.value))
    }
    const changeName = (e) => {
        dispatch(onchangeName(e.target.value))
    }
    const changeText = (e) => {
        dispatch(onchangetext(e.target.value))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log('submit')
    }

    return (
        <form className={styles.wrapper}>
            <div className={styles.input_group}>
                <label htmlFor="name">_name</label>
                <input onChange={changeName} type="text" id='name' />
            </div>
            <div className={styles.input_group}>
                <label htmlFor="email">_email</label>
                <input onChange={changeEmail} type="email" id='email' />
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