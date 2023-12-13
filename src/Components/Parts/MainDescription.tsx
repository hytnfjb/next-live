/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import dayjs from 'dayjs';
import ja from 'dayjs/locale/ja';
dayjs.locale(ja);

const contentWrapper = css`
  width: 100vw;
  height: 45svh;
  color: #fff;
  background-color: #251234;
  padding: 2svh 5vw;
  position: absolute;
  top: 55svh;
  position: fixed;
  overflow: scroll;
`

const contentInner = css`
  width: 90vw;
  height: 40svh;
  background-color: rgba(0,0,0,0.2);
  padding: 3svh 4vw;
  filter:drop-shadow(1px 3px 5px rgba(0, 0, 0, 1));
  overflow: scroll;
  border-radius: 10px;
`

const liveTitle = css`
  color: #F2F2F2;
  font-family: "Arial";
  font-size: 8vw;
  letter-spacing: 0.05em;
  text-align: center;
  text-shadow:
    1px 1px 0 #35286B,
    2px 2px 0 #35286B,
    3px 3px 0 #35286B,
    4px 4px 0 #35286B,
    5px 5px 0 #35286B;
  margin-bottom: 3svh;
`

const detailList = css`
  font-family: "Arial";
  font-size: 3vw;
  margin-top: 2svh;
`

const highlight = css`
  font-size: 5vw;
`

const anchor = css`
  color: #7837C0;
`

type DescriptionDataProps = {
  date: string;
  openTime: number | null;
  startTime: number | null;
  place: string;
  placeUrl: string | undefined,
  advancePrice: number | null;
  sameDayPrice: number | null;
  isOneDrink: boolean | null;
};

export const MainDescription: React.FC<DescriptionDataProps> = ({
  date,
  openTime,
  startTime,
  place,
  placeUrl,
  advancePrice,
  sameDayPrice,
  isOneDrink
}) => {

  const rawDate = dayjs(date);
  const formatYear = rawDate.format('YYYY');
  const formatMonth = rawDate.format('MM');
  const formatDay = rawDate.format('DD');
  const formatWeek = rawDate.format('dd');

  const formatAdvancePrice = advancePrice !== null ? advancePrice.toLocaleString() : null;
  const formatSameDayPrice = sameDayPrice !== null ? sameDayPrice.toLocaleString() : null;
  
  return (
    <>
      <div css={contentWrapper}>
        <div css={contentInner}>
          {/* <h1 css={liveTitle}>NextLive</h1> */}
          <p css={detailList}>
            <span css={highlight}>{formatYear}</span>年
            <span css={highlight}>{formatMonth}</span>月
            <span css={highlight}>{formatDay}</span>日
            ({formatWeek})
          </p>
          <p css={detailList}>
            開場: <span css={highlight}>{openTime}</span> 開演: <span css={highlight}>{startTime}</span>
          </p>
          <p css={detailList}>
            会場: {
              placeUrl ?
                <a href={placeUrl} target="_blank" rel="noreferrer" css={anchor}><span css={highlight}>{place}</span></a>
                :
                <span css={highlight}>{place}</span>
            }
          </p>
          <p css={detailList}>
            前売り: <span css={highlight}>¥{formatAdvancePrice}</span> 当日: <span css={highlight}>¥{formatSameDayPrice}</span>
          </p>
          {isOneDrink ? <p css={detailList}>※1ドリンクオーダー制</p> : ""}
        </div>
      </div>
    </>
  )
}
