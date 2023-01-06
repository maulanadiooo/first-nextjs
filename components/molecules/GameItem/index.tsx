import Image from "next/image";
import Link from "next/link";

interface GameItemProps {
  gameTitle: string;
  gameType: string;
  imageThumnail:
    | "Thumbnail-1"
    | "Thumbnail-2"
    | "Thumbnail-3"
    | "Thumbnail-4"
    | "Thumbnail-5";
}

export default function GameItem(props: GameItemProps) {
  const { gameTitle, gameType, imageThumnail } = props;
  return (
    <div className="featured-game-card position-relative">
      <Link href="/detail">
        <div className="blur-sharp">
          <Image
            className="thumbnail"
            src={`/img/${imageThumnail}.png`}
            width={205}
            height={270}
            alt="Thumbnail"
          />
        </div>
        <div className="cover position-absolute bottom-0 m-32">
          <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
            <div className="game-icon mx-auto">
              <Image
                src="/icon/controller.svg"
                width={54}
                height={36}
                alt="Controller"
              />
            </div>
            <div>
              <p className="fw-semibold text-white text-xl m-0">{gameTitle}</p>
              <p className="fw-light text-white m-0">{gameType}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
