/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { MainImage } from "../Parts/MainImage";

const imageBorder = css`
  width: 100vw;
  height: 20svh;
  background-image: url("./image/Rectangle.png");
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  position: fixed;
  top: 35svh;
  z-index: 10;
`

type MainImageProps = {
  imageSrc: string;
};

export const MainVisualArea: React.FC<MainImageProps> = ({ imageSrc }) => {
  return (
    <>
      <div css={imageBorder} />
      <MainImage imageSrc={imageSrc}/>
    </>
	)
}
