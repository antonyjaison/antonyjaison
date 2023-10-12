"use client"

import styles from '@styles/snakeGame.module.scss'
import { Snake } from '@json2d/react-snake-lib'

const SnakeGame = () => {

    const bgColor = "rgba(1, 22, 39, 0.84)"
    const snakeColor  = "#43D9AD"

    return (
        <div className={styles.wrapper}>
            <img className={styles.img_1} src="/icons/snake_corner_img.svg" alt="" />
            <img className={styles.img_2} src="/icons/snake_corner_img.svg" alt="" />
            <img className={styles.img_3} src="/icons/snake_corner_img.svg" alt="" />
            <img className={styles.img_4} src="/icons/snake_corner_img.svg" alt="" />
            <div className={styles.game_wrapper}>

                <div className={styles.game_section}>

                    {/* <Snake
                        startOnLoad
                        initialSnake={[
                            { x: 2, y: 0 },
                            { x: 2, y: 1 },
                            { x: 2, y: 2 },
                            { x: 2, y: 3 },
                            { x: 2, y: 4 },
                        ]}
                        initialDirection="down"
                        width="100%"
                        height="100%"
                        bgColor={bgColor}
                        innerBorderColor={bgColor}
                        snakeSpeed={100}
                        borderColor={bgColor}
                        snakeColor={snakeColor}
                        snakeHeadColor={snakeColor}
                        appleColor="tomato"
                        borderRadius={5}
                        snakeHeadRadius={1}
                        borderWidth={0}
                        shakeBoard={true}
                        boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                        size={20}
                        startGameText="Start Game"
                        startButtonStyle={{
                            color: "white",
                            padding: "6px 20px",
                            backgroundColor: "rgba(1, 22, 39, 0.84)",
                            borderRadius: "10px",
                            fontSize: "17px",
                            fontWeight: "600",
                            cursor: "pointer"
                        }}
                        startButtonHoverStyle={{
                            backgroundColor: "#43D9AD"
                        }}
                        noWall={true}
                    /> */}

                </div>

                <div className={styles.control_section}>

                </div>

            </div>
        </div>
    )
}

export default SnakeGame