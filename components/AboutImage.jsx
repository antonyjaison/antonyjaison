'use client'

import styles from '@styles/aboutImage.module.scss'
import { useSelector } from 'react-redux'

const AboutImage = () => {
    const data = useSelector(state => state.about.imageData)

    return (
        <div className={styles.wrapper}>

            <div className={styles.header}>
                <div className={styles.tab}>
                    <p><span className={styles.folder_name}>//</span><span> {data?.name}</span></p>
                    <img src="/icons/close.svg" alt="close-icon" />
                </div>
            </div>

            <div className={styles.image_section}>
                {!data.name ? <p>lorem</p> : <img className={styles.image} src={`/images/${data.name}`} alt={data.name} />}
            </div>

        </div>
    )
}

export default AboutImage