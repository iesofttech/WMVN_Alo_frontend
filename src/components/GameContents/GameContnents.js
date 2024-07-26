import React from "react";
import styles from "./GameContent.module.css";
import { Typography } from "antd";
import LiveArenaIcon from "../../assets/images/game-categories/COCKFIGHT.png";
import CockFightingImage from "../../assets/images/game-content/GameCockfight.png";
import playIcon from "../../assets/images/game-content/PlayIcon.png";

const GameContnents = () => {
  return (
    <div className={styles.paddingWrapper}>
      <div className={styles.gameContents}>
        
        <div className={styles.gameWrapper}>
          <div className={styles.gameHeader}>
            <img className={styles.gameImgBg} src={LiveArenaIcon} alt="icon" />
            <Typography.Text className={styles.gameTitle}>
              Live Arena
            </Typography.Text>
          </div>
          <div className={styles.imageContainer}>
            <div className={styles.imageOverlay}>
              <div className={styles.playButtonContainer}>
                <img src={playIcon} alt="playIcon" className="imgStyle" />
              </div>
            </div>
            <img
              src={CockFightingImage}
              alt="Image1"
              className={styles.gameImage}
              style={{
                cursor: "pointer",
              }}
            />
          </div>
          {/* <div className={styles.gameImage}>
            <img width="100%" height="100%" src={CockFightingImage} alt="" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default GameContnents;
