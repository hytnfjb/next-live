/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { MainImage } from "../Parts/MainImage";
import { MainVisualImageModal } from "../Templates/MainVisualImageModal";

const contentWrapper = css`
  width: 100vw;
  height: 55svh;
  background-image: url("./image/mv_background.gif");
  background-size: cover;
  background-position: bottom center;
  background-repeat: no-repeat;
  position: fixed;
`

const liveTitle = css`
  color: #F2F2F2;
  font-family: "Arial";
  font-size: 10vw;
  letter-spacing: 0.05em;
  text-align: center;
  text-shadow:
    1px 1px 0 #000,
    2px 2px 0 #000,
    3px 3px 0 #000,
    4px 4px 0 #000,
    5px 5px 0 #000;
  margin-top: 7svh;
`

// const imageBorder = css`
//   width: 100vw;
//   height: 20svh;
//   background-image: url("./image/Rectangle.png");
//   background-size: cover;
//   background-position: top center;
//   background-repeat: no-repeat;
//   position: fixed;
//   top: 35svh;
//   z-index: 10;
// `

type MainImageProps = {
  imageSrc: string;
};

export const MainVisualArea: React.FC<MainImageProps> = ({ imageSrc }) => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const openModal = () => {
    setIsShowModal(true);
  };
  const closeModal = () => {
    setIsShowModal(false);
  };

  return (
    <>
      <MainVisualImageModal isShow={isShowModal} closeModal={closeModal} imageSrc={imageSrc}/>
      <div css={contentWrapper}>
        {/* <div css={imageBorder} /> */}
        <h1 css={liveTitle}>NextLive!</h1>
        <MainImage imageSrc={imageSrc} openModal={openModal}/>
      </div>
    </>
	)
}
