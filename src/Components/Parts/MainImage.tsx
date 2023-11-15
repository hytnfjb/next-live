/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const contentWrapper = css`
  width: 100vw;
  height: 55svh;
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  position: fixed;
`

type MainImageProps = {
  imageSrc: string;
};

export const MainImage: React.FC<MainImageProps> = ({ imageSrc }) => {
	return (
    <>
      <div
        css={contentWrapper}
        style={{ 
          backgroundImage: `url(${imageSrc})`
        }}
      />
    </>
	)
}
