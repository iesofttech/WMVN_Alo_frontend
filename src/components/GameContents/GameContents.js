import React from "react";
import styles from "./GameContent.module.css";
import LobbyGames from "./LobbyGames/LobbyGames";
import LiveArenaIcon from "../../assets/images/game-categories/COCKFIGHT.png";

const GameContents = ({ activeCatId, games }) => {
  return (
    <div className={styles.paddingWrapper}>
      <LobbyGames games={games} />
    </div>
  );
};

export default GameContents;
