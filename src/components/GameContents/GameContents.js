import React from "react";
import styles from "./GameContent.module.css";
import LobbyGames from "./LobbyGames/LobbyGames";
import HotTableGames from "./HotTable/HotTableGames";

const GameContents = ({ activeCatId, games }) => {
  return (
    <div className={styles.paddingWrapper}>
      {activeCatId === 3 ? (
        <HotTableGames games={games} />
      ) : (
        <LobbyGames games={games} />
      )}
    </div>
  );
};

export default GameContents;
