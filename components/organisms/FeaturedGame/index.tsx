import GameItem from "../../molecules/GameItem";

export default function FeaturedGame() {
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
          <GameItem
            gameTitle="Super Mechs"
            gameType="Mobile"
            imageThumnail="Thumbnail-1"
          />
          <GameItem
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
          />
        </div>
      </div>
    </section>
  );
}
