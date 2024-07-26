import React, { useState } from "react";
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
import GameContnents from "../../components/GameContents/GameContnents";

const Home = () => {
  const [isLoading, setIsloading] = useState(false);
  const [activeCatId, setActiveCatId] = useState();
  const banners = [Banner1, Banner1];

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
  return (
    <div
      style={{
        height: "auto",
        maxWidth: "561px",
        width: "100%",
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
      <GameContnents />
      {/* <div
        style={{
          height: "63px",
          maxWidth: "561px",
          width: "100%",
          flexShrink: 0,
          background: "#0A151F 0% 0% no-repeat padding-box",
          zIndex: 1000,
          position: "fixed",
          display: "flex",
          color: "#ffffff",
        }}
      >
        Home
      </div> */}
    </div>
  );
};

export default Home;
