/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const contentWrapper = css`
  width: 100vw;
  background-color: #10181F;
  position: absolute;
  top: 100vh;
  display: block;
  border-radius: 2rem 2rem 0 0;
  z-index: 15;
`

const contentInner = css`
  background-color: #fff;
  padding: 3vh 5vw;
  border-radius: 2rem 2rem 0 0;
`

const detailList = css`
  
`

const detailListItem = css`

`

const detailListItemTitle = css`
  font-size: 5vw;
  font-weight: bold;
`

const detailListItemContent = css`
  font-size: 4vw;
  margin-top: 2vh;
`

type DetailProps = {
  detailText: string;
};

export const DetailArea: React.FC<DetailProps> = ({detailText}) => {
  console.log(detailText);
  
  return (
    <div css={contentWrapper}>
      <div css={contentInner}>
        <ul css={detailList}>
          <li css={detailListItem}>
            <p css={detailListItemTitle}>詳細</p>
            <p css={detailListItemContent}>{detailText}</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
