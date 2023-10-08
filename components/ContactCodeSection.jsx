'use client'

import styles from '@styles/contactCodeSection.module.scss'
import { useSelector } from 'react-redux'
import formatTimestamp from '@utils/formatTimeStamp'

const ContactCodeSection = () => {

    const { name, email, text, date } = useSelector(state => state.contact)

    const message = text.length > 25 ? text.slice(0, 25) + '...' : text

    const today = formatTimestamp(date)

    return (
        <pre className={styles.wrapper}>
            <span>1</span>     <span className={styles.data_type}>const</span> <span className={styles.variable_name}>button</span> <span className={styles.data_type}>=</span> <span className={styles.variable_name}>document.querySelector</span><span>{'('}</span><span className={styles.string}>'#form'</span><span>{')'}</span><span>;</span> <br />
            <span>2</span><br />
            <span>3</span>     <span className={styles.data_type}>const</span> <span className={styles.variable_name}>message</span> <span className={styles.data_type}>=</span> <span>{'{'}</span><br />
            <span>4</span>      <span className={styles.variable_name}>name</span><span>:</span> <span className={styles.string}>{`"${name}"`}</span><span>,</span><br />
            <span>5</span>      <span className={styles.variable_name}>email</span><span>:</span> <span className={styles.string}>{`"${email}"`}</span><span>,</span><br />
            <span>6</span>      <span className={styles.variable_name}>message</span><span>:</span>  <span className={styles.string}>{`"${message}"`}</span><span>,</span><br />
            <span>7</span>      <span className={styles.variable_name}>date</span><span>:</span>  <span className={styles.string}>{`"${today}"`}</span><span>,</span><br />
            <span>8</span>     <span>{'}'}</span><br />
            <span>9</span><br />
            <span>10</span>    <span className={styles.variable_name}>button.addEventListener</span><span>{'('}</span><span className={styles.string}>'click'</span><span>,</span> <span>()</span> <span className={styles.data_type}>{'=>'}</span> <span>{'{'}</span><br />
            <span>11</span>     <span className={styles.variable_name}>form.send</span><span>{'('}</span><span className={styles.variable_name}>message</span><span>{')'}</span><span>;</span><br />
            <span>12</span>    <span>{'})'}</span><br />
        </pre>
    )
}

export default ContactCodeSection