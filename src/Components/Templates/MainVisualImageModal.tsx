/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect } from "react";

const contentBackground = css`
  width: 100vw;
  height: 100svh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 15;
`

const closeModalBtn = css`
  display: block;
  position: relative;
  width: 100%;
  height: 30px;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    right: 10px;
    width: 2px;
    height: 30px;
    background: #fff;
    transform: translate(-50%,-50%) rotate(45deg);
  }
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 10px;
    width: 2px;
    height: 30px;
    background: #fff;
    transform: translate(-50%,-50%) rotate(-45deg);
  }
`

const contentWrapper = css`
  width: 90vw;
  max-height: 80svh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: scroll;
  z-index: 20;
`

const contentImage = css`
  width: 100%;
`

type ModalProps = {
  isShow: boolean;
  imageSrc: string;
  closeModal: () => void;
};

export const MainVisualImageModal: React.FC<ModalProps> = ({ isShow, imageSrc, closeModal }) => {
  const [isShowModal, setIsShowModal] = useState(false);

  useEffect(() => {
    setIsShowModal(isShow);
  }, [isShow]);

	return (
    <>
      {isShowModal &&
        <>
          <div>
            <div css={contentBackground} onClick={closeModal}/>
            <div css={contentWrapper}>
              {/* TODO: 擬似要素のスタイルもう少し詰めたい */}
              <span css={closeModalBtn} onClick={closeModal}/>
              {/* TODO: altどうするか問題 */}
              <img css={contentImage} src={imageSrc} alt=""/>
            </div>
          </div>
        </>
      } 
    </>
	)
}
