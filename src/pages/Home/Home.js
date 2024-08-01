import React, { useEffect, useState } from "react";
import HomeBar from "../../components/HomeBar/HomeBar";
import GameCategories from "../../components/GameCategory/GameCategories";
import LiveArenaIcon from "../../assets/images/game-categories/COCKFIGHT.png";
import SportsIcon from "../../assets/images/game-categories/SPORTS.png";
import CasinoIcon from "../../assets/images/game-categories/LIVE.png";
import TableIcon from "../../assets/images/game-categories/RNGTABLE.png";
import ArcadeIcon from "../../assets/images/game-categories/ARCADE.png";
import FishingIcon from "../../assets/images/game-categories/FH.png";
import SlotsIcon from "../../assets/images/game-categories/SLOT.png";
import Carousel from "../../components/Carousel/Carousel";
import Banner1 from "../../assets/images/carousel-banner/Banner.png";
import GameContents from "../../components/GameContents/GameContents";
import CockFightingImage from "../../assets/images/game-content/GameCockfight.png";
import Sports1 from "../../assets/images/game-content/games/Sports1.png";
import Sports2 from "../../assets/images/game-content/games/Sports2.png";
import bgLiveArena from "../../assets/images/game-content/LiveArenaBG.png";
import bgSports from "../../assets/images/game-content/SportsBG.png";

import HotTableGames1 from "../../assets/images/game-content/hot-table/HotTable1.png";
import HotTableGames2 from "../../assets/images/game-content/hot-table/HotTable2.png";
import HotTableGames3 from "../../assets/images/game-content/hot-table/HotTable3.png";
import HotTableGames4 from "../../assets/images/game-content/hot-table/HotTable4.png";
import bgHotTable from "../../assets/images/game-content/HotTableBG.png";

const Home = () => {
  const [isLoading, setIsloading] = useState(false);
  const [activeCatId, setActiveCatId] = useState(1);
  const banners = [Banner1, Banner1];
  const [games, setGames] = useState();
  const gameCategories = [
    {
      id: 1,
      name: "Live Arena",
      image: LiveArenaIcon,
    },
    {
      id: 2,
      name: "Sports",
      image: SportsIcon,
    },
    {
      id: 3,
      name: "Casino",
      image: CasinoIcon,
    },
    {
      id: 4,
      name: "Table",
      image: TableIcon,
    },
    {
      id: 5,
      name: "Arcade",
      image: ArcadeIcon,
    },
    {
      id: 6,
      name: "Fishing",
      image: FishingIcon,
    },
    {
      id: 7,
      name: "Slots",
      image: SlotsIcon,
    },
  ];

  useEffect(() => {
    if (activeCatId === 1) {
      setGames({
        id: 1,
        bgImage: bgLiveArena,
        title: "Live Arena",
        icon: LiveArenaIcon,
        gameItems: [
          {
            id: 1,
            name: "Cock Fighting",
            image: CockFightingImage,
          },
        ],
      });
    } else if (activeCatId === 2) {
      setGames({
        id: 2,
        bgImage: bgSports,
        title: "Sports",
        icon: SportsIcon,
        gameItems: [
          {
            id: 1,
            name: "Sbobet",
            image: Sports1,
          },
          {
            id: 2,
            name: "bong88",
            image: Sports2,
          },
        ],
      });
    } else if (activeCatId === 3) {
      setGames({
        id: 2,
        bgImage: bgHotTable,
        title: "Casino",
        icon: CasinoIcon,
        gameItems: [
          {
            id: 1,
            name: "SicBo1",
            image: HotTableGames1,
          },
          {
            id: 2,
            name: "SicBo2",
            image: HotTableGames2,
          },
          {
            id: 3,
            name: "SicBo3",
            image: HotTableGames3,
          },
          {
            id: 4,
            name: "SicBo4",
            image: HotTableGames4,
          },
        ],
      });
    }
  }, [activeCatId]);

  return (
    <div
      style={{
        // height: "auto",
        // maxWidth: "561px",
        // width: "100%",
        background: "#0A151F 0% 0% no-repeat padding-box",
      }}
    >
      <HomeBar />
      <GameCategories
        activeCatId={activeCatId}
        setActiveCatId={setActiveCatId}
        isLoading={isLoading}
        gameCategories={gameCategories}
      />
      <Carousel banners={banners} />
      <GameContents activeCatId={activeCatId} games={games} />
    </div>
  );
};

export default Home;
