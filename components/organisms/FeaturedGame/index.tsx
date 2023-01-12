import { useCallback, useEffect, useState } from "react";
import GameItem from "../../molecules/GameItem";
import axios from "axios";
import { getFeaturedGame } from "../../../services/player";
import { GameItemTypes } from "../../../services/dataTypes";

export default function FeaturedGame() {
  const [gameList, setGameList] = useState([]);
  const getFeatureGameList = useCallback(async () => {
    const data = await getFeaturedGame();
    setGameList(data);
  }, [getFeaturedGame]);

  useEffect(() => {
    getFeatureGameList();
  }, []);
  const API_IMAGE = process.env.NEXT_PUBLIC_IMAGE;
  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br /> Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          {gameList.map((item: GameItemTypes) => {
            return (
              <GameItem
                key={item._id}
                id={item._id}
                gameTitle={item.name}
                gameType={item.category.name}
                imageThumbnail={`${API_IMAGE}/${item.thumbnail}`}
              />
            );
          })}

          {/* <GameItem
            gameTitle="Call of Duty: Modern"
            gameType="Mobile"
            imageThumnail="Thumbnail-2"
          />
          <GameItem
            gameTitle="Mobile Legends"
            gameType="Mobile"
            imageThumnail="Thumbnail-3"
          />
          <GameItem
            gameTitle="Clash of Clans"
            gameType="Mobile"
            imageThumnail="Thumbnail-4"
          />
          <GameItem
            gameTitle="Valorant"
            gameType="Mobile"
            imageThumnail="Thumbnail-5"
          /> */}
        </div>
      </div>
    </section>
  );
}
