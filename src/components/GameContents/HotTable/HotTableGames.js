import React, { useRef, useState } from "react";
import styles from "./HotTableGames.module.css";
import { Col, Row, Typography } from "antd";
import playIcon from "../../../assets/images/game-content/PlayIcon.png";
import Loader from "../../../helpers/helperComponents/Loader";

const HotTableGames = ({ games }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [loadingGameId, setLoadingGameId] = useState(null);
  const scrollableContainerRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [initialMouseX, setInitialMouseX] = useState(0);
  const [initialScrollX, setInitialScrollX] = useState(0);

  const handleMouseDown = (event) => {
    setIsMouseDown(true);
    setInitialMouseX(event.clientX);
    setInitialScrollX(scrollableContainerRef.current.scrollLeft);
    scrollableContainerRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (event) => {
    if (!isMouseDown) return;
    const deltaX = event.clientX - initialMouseX;
    scrollableContainerRef.current.scrollLeft = initialScrollX - deltaX;
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
    scrollableContainerRef.current.style.cursor = "grab";
  };
  return (
    <div
      style={{
        background: `url(${games?.bgImage})`,
        // backgroundSize: "cover",
        width: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className={styles.lobbyWrapper}
    >
      {loadingGameId ? (
        <Loader />
      ) : (
        <div className={styles.gameList}>
          <div className={styles.gameHeader}>
            <img className={styles.gameImgBg} src={games?.icon} alt="icon" />
            <Typography.Text className={styles.gameTitle}>
              {games?.title}
            </Typography.Text>
          </div>
          <div
            style={{ padding: "5px 15px" }}
            className="scrollable-container"
            id={`scrollable-container-${games?.id}`}
            ref={scrollableContainerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <Row gutter={12} wrap={false}>
              <div className={styles.gameItems}>
                {games?.gameItems.map((game) => {
                  return (
                    <Col
                      key={game.id}
                      //   sm={
                      //     games?.length >= 3 ? 7 : games?.length === 2 ? 10 : 24
                      //   }
                      //   span={
                      //     screenWidth <= 576 ? (games.length >= 2 ? 8 : 24) : ""
                      //   }
                      span={12}
                      style={{ padding: "6px" }}
                    >
                      <div
                        key={game.id}
                        className={styles.game}
                        // onClick={() => APIPlayGameFunc(game.game_item_id)}
                      >
                        <div className={`${styles.imageContainer}`}>
                          <div className={styles.imageOverlay}>
                            <div className={styles.playButtonContainer}>
                              <img
                                src={playIcon}
                                alt="playIcon"
                                className="imgStyle"
                                // onClick={() => APIPlayGameFunc(game.game_item_id)}
                              />
                            </div>
                          </div>

                          <img
                            src={game.image}
                            alt="images"
                            className={styles.gameImage}
                            style={{ cursor: "pointer" }}
                          />
                        </div>
                      </div>
                    </Col>
                  );
                })}
              </div>
            </Row>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotTableGames;
