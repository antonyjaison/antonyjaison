"use client";

import styles from "@styles/snakeGame.module.scss";
import { Snake } from "react-snake-lib";
import { useEffect, useState } from "react";

const SnakeGame = () => {
  const bgColor = "rgba(1, 22, 39, 0.84)";
  const snakeColor = "#43D9AD";
  const buttonColor = "#FEA55F";

  const [isGameStart, setIsGameStart] = useState(false);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameSettings, setGameSettings] = useState({
    border: false,
    level: 1,
  });

  const onGameStart = () => {
    setIsGameStart(true);
  };
  const onGameOver = () => {
    setIsGameStart(false);

    const snakeGame = localStorage.getItem("snakeGame") || null;

    if (snakeGame === null) {
      localStorage.setItem(
        "snakeGame",
        JSON.stringify({
          best: score,
        })
      );
    } else {
      const { best } = JSON.parse(localStorage.getItem("snakeGame"));
      if (score > best) {
        localStorage.setItem(
          "snakeGame",
          JSON.stringify({
            best: score,
          })
        );
      }
    }
  };

  const addBorder = () => {
    setGameSettings((prev) => ({ level: prev.level, border: true }));
  };
  const removeBorder = () => {
    setGameSettings((prev) => ({ level: prev.level, border: false }));
  };

  const selectLevel = (level) => {
    setGameSettings((prev) => ({ level: level, border: prev.border }));
  };

  const selectLevelForGame = () => {
    switch (gameSettings.level) {
      case 1:
        return 100;
      case 2:
        return 75;
      case 3:
        return 50;
    }
  };

  const selectGameBorder = () => {
    return !gameSettings.border;
  };

  const onScoreChange = (score) => {
    const snakeGame = localStorage.getItem("snakeGame") || null;
    if (snakeGame === null) {
      localStorage.setItem(
        "snakeGame",
        JSON.stringify({
          best: score,
        })
      );
      setBestScore(0);
    } else {
      const snakeGame = JSON.parse(localStorage.getItem("snakeGame"));
      if (score > snakeGame.best) {
        localStorage.setItem(
          "snakeGame",
          JSON.stringify({
            best: score,
          })
        );
      }
    }

    setScore(score);
  };

  useEffect(() => {
    const snakeGame = localStorage.getItem("snakeGame") || null;

    if (snakeGame === null) {
      setBestScore(0);
    } else {
      const { best } = JSON.parse(localStorage.getItem("snakeGame"));
      setBestScore(best);
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <img className={styles.img_1} src="/icons/snake_corner_img.svg" alt="" />
      <img className={styles.img_2} src="/icons/snake_corner_img.svg" alt="" />
      <img className={styles.img_3} src="/icons/snake_corner_img.svg" alt="" />
      <img className={styles.img_4} src="/icons/snake_corner_img.svg" alt="" />
      <div className={styles.game_wrapper}>
        <div
          className={`${styles.game_section} ${
            gameSettings.border ? styles.game_section_active : ""
          }`}
        >
          <Snake
            onScoreChange={onScoreChange}
            onGameOver={onGameOver}
            onGameStart={onGameStart}
            width="100%"
            height="100%"
            bgColor="transparent"
            innerBorderColor={bgColor}
            snakeSpeed={selectLevelForGame()}
            borderColor={bgColor}
            snakeColor={snakeColor}
            snakeHeadColor={snakeColor}
            appleColor="#FEA55F"
            borderRadius={5}
            snakeHeadRadius={10}
            borderWidth={0}
            shakeBoard={true}
            boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            size={35}
            startGameText="Start Game"
            startButtonStyle={{
              color: "black",
              padding: "6px 20px",
              backgroundColor: buttonColor,
              borderRadius: "10px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              position: "absolute",
              bottom: "55px",
            }}
            startButtonHoverStyle={{
              backgroundColor: snakeColor,
            }}
            noWall={selectGameBorder()}
          />

          {isGameStart ? "" : <img src="/images/game_img.svg" alt="" />}
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
                  <img src="/icons/left_arrow.svg" alt="" />
                </button>
              </div>
              <div className={styles.btn_3}>
                <button>
                  <img src="/icons/bottom_arrow.svg" alt="" />
                </button>
              </div>
              <div className={styles.btn_4}>
                <button>
                  <img src="/icons/right_arrow.svg" alt="" />
                </button>
              </div>
            </div>
          </div>

          <div className={styles.settings_wrapper}>
            <div className={styles.border_section_wrapper}>
              <p>// settings</p>
              <div className={styles.border_section}>
                <button
                  onClick={() => addBorder()}
                  className={
                    gameSettings.border ? styles.border_btn_active : ""
                  }
                >
                  border
                </button>
                <button
                  onClick={() => removeBorder()}
                  className={
                    gameSettings.border ? "" : styles.border_btn_active
                  }
                >
                  no-border
                </button>
              </div>
            </div>

            <div className={styles.level_section}>
              {/* <p>// level</p> */}
              <div className={styles.level_section_wrapper}>
                <div className={styles.level}>
                  <button
                    onClick={() => selectLevel(1)}
                    className={
                      gameSettings.level === 1
                        ? `${styles.lvl_1} ${styles.lvl_active}`
                        : styles.lvl_1
                    }
                  >
                    <p>1</p>
                  </button>
                </div>
                <div className={styles.level}>
                  <button
                    onClick={() => selectLevel(2)}
                    className={
                      gameSettings.level === 2
                        ? `${styles.lvl_2} ${styles.lvl_active}`
                        : styles.lvl_2
                    }
                  >
                    <p>2</p>
                  </button>
                </div>
                <div className={styles.level}>
                  <button
                    onClick={() => selectLevel(3)}
                    className={
                      gameSettings.level === 3
                        ? `${styles.lvl_3} ${styles.lvl_active}`
                        : styles.lvl_3
                    }
                  >
                    <p>3</p>
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.score_section_wrapper}>
              {/* <p>// score</p> */}
              <div className={styles.score_section}>
                <div className={styles.score}>
                  <h4>score</h4>
                  <p>{score}</p>
                </div>
                <div className={styles.score}>
                  <h4>best</h4>
                  <p>{bestScore}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnakeGame;
