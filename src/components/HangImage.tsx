import image0 from "/assets/game/0.png";
import image1 from "/assets/game/1.png";
import image2 from "/assets/game/2.png";
import image3 from "/assets/game/3.png";
import image4 from "/assets/game/4.png";
import image5 from "/assets/game/5.png";
import image6 from "/assets/game/6.png";
import image7 from "/assets/game/7.png";
import image8 from "/assets/game/8.png";
import image9 from "/assets/game/9.png";

const images: string[] = [
  image0,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
];

interface Props {
  imageNumber: number;
}
export function HangImage({ imageNumber }: Props) {

  if (imageNumber >= 9) {
    imageNumber = 9
  }
  return <img src={images[imageNumber]} alt="Imagen ahorcado" width={250} />;
}
