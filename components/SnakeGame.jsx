"use client"

import styles from '@styles/snakeGame.module.scss'
// import { Snake } from '@json2d/react-snake-lib'
import { Snake } from 'react-snake-lib'

const SnakeGame = () => {

    const bgColor = "rgba(1, 22, 39, 0.84)"
    const snakeColor = "#43D9AD"

    return (
        <div className={styles.wrapper}>
            <img className={styles.img_1} src="/icons/snake_corner_img.svg" alt="" />
            <img className={styles.img_2} src="/icons/snake_corner_img.svg" alt="" />
            <img className={styles.img_3} src="/icons/snake_corner_img.svg" alt="" />
            <img className={styles.img_4} src="/icons/snake_corner_img.svg" alt="" />
            <div className={styles.game_wrapper}>

                <div className={styles.game_section}>

                    <Snake
                        width="100%"
                        height="100%"
                        bgColor="transparent"
                        innerBorderColor={bgColor}
                        snakeSpeed={100}
                        borderColor={bgColor}
                        snakeColor={snakeColor}
                        snakeHeadColor={snakeColor}
                        appleColor="#FEA55F"
                        borderRadius={5}
                        snakeHeadRadius={10}
                        borderWidth={0}
                        shakeBoard={true}
                        boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                        size={16}
                        startGameText="Start Game"
                        startButtonStyle={{
                            color: "white",
                            padding: "6px 20px",
                            backgroundColor: snakeColor,
                            borderRadius: "10px",
                            fontSize: "16px",
                            fontWeight: "600",
                            cursor: "pointer"
                        }}
                        startButtonHoverStyle={{
                            backgroundColor: snakeColor
                        }}
                        noWall={true}
                    />

                </div>

                <div className={styles.control_section}>
                    <div className={styles.snake_control_btns}>
                        <p>// use keyboard</p>
                        <p>// arrows to play</p>

                        <div className={styles.snake_control_btns_wrapper}>

                            <div className={styles.btn_1}>
                                <button>
                                    <img src="/icons/top_arrow.svg" alt="" />
                                </button>
                            </div>
                            <div className={styles.btn_2}>
                                <button>
                                    <img src="/icons/top_arrow.svg" alt="" />
                                </button>
                            </div>
                            <div className={styles.btn_3}>
                                <button>
                                    <img src="/icons/top_arrow.svg" alt="" />
                                </button>
                            </div>
                            <div className={styles.btn_4}>
                                <button>
                                    <img src="/icons/top_arrow.svg" alt="" />
                                </button>
                            </div>

                        </div>
                    </div>

                    <div className={styles.settings_wrapper}>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default SnakeGame