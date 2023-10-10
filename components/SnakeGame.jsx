'use client'

import styles from '@styles/snakeGame.module.scss'
import { useState } from 'react'

const SnakeGame = () => {

    return (
        <div className={styles.wrapper}>
            <img className={styles.img_1} src="/icons/snake_corner_img.svg" alt="" />
            <img className={styles.img_2} src="/icons/snake_corner_img.svg" alt="" />
            <img className={styles.img_3} src="/icons/snake_corner_img.svg" alt="" />
            <img className={styles.img_4} src="/icons/snake_corner_img.svg" alt="" />
            <div className={styles.game_wrapper}>

                <div className={styles.game_section}>

                </div>

                <div className={styles.control_section}>

                </div>

            </div>
        </div>
    )
}

export default SnakeGame