/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { MainImage } from "../Parts/MainImage";
import { MainVisualImageModal } from "../Templates/MainVisualImageModal";

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
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const closeModal = () => {
    setIsShowModal(false);
  };

  return (
    <>
      <MainVisualImageModal isShow={isShowModal} closeModal={closeModal} imageSrc={imageSrc}/>
      <div onClick={() => setIsShowModal(true)}>
        <div css={imageBorder} />
        <MainImage imageSrc={imageSrc}/>
      </div>
    </>
	)
}
