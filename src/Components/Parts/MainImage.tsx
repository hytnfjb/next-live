/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const contentWrapper = css`
  width: 50vw;
  height: 50vw;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 3svh auto 0 auto;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  opacity: 0.7;
  border-radius: 10px;
`

type MainImageProps = {
  imageSrc: string;
  openModal: () => void;
};

export const MainImage: React.FC<MainImageProps> = ({ imageSrc, openModal }) => {
	return (
    <>
      <div 
        css={contentWrapper}
        style={{backgroundImage: `url(${imageSrc})`}}
        onClick={openModal}
      />
    </>
	)
}
