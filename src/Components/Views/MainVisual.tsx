/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect } from "react";
import { MainVisualArea } from "../Templates/MainVisualArea";
import { MainDescription } from "../Parts/MainDescription";
// import { DetailArea } from "../Templates/DetailArea";

const contentWrapper = css`
  width: 100vw;
  height: 100svh;
  background-color: #10181F;
  position: relative;
`

type DescriptionDataProps = {
  image: string;
  date: string;
  openTime: number | null;
  startTime: number | null;
  place: string;
  placeUrl: string | undefined;
  advancePrice: number | null;
  sameDayPrice: number | null;
  isOneDrink: boolean | null;
};

export const MainVisual: React.FC = () => {

  const [descriptionData, setDescriptionData] = useState<DescriptionDataProps>({
    image: '',
    date: '',
    openTime: null,
    startTime: null,
    place: '',
    placeUrl: undefined,
    advancePrice: null,
    sameDayPrice: null,
    isOneDrink: null
  });

  const fetchLiveDescription = async () => {
    const res = await fetch('https://hytnfjb.microcms.io/api/v1/description/',{
      method: 'GET',
      headers: {
        'X-API-KEY': '4IOo1UBq2VYdEkJy5LWa2izJ542XKAh3OgTK'
      }
    });
    try {
      const resData = await res.json();
      const data = resData.contents[0];

      setDescriptionData((prevState) => {
        return {
          ...prevState,
          image: data.image.url,
          title: data.title,
          date: data.date,
          openTime: data.openTime,
          startTime: data.startTime,
          place: data.place,
          placeUrl: data.placeUrl,
          advancePrice: data.advancePrice,
          sameDayPrice: data.sameDayPrice,
          isOneDrink: data.isOneDrink
        };
      });
    } catch(e) {
      console.error(e);
    };
  };

  useEffect(() => {
    fetchLiveDescription();
  },[]);

  return (
    <>
      <div css={contentWrapper}>
        <MainVisualArea
          imageSrc={descriptionData.image}
        />
        <MainDescription
          date={descriptionData.date}
          openTime={descriptionData.openTime}
          startTime={descriptionData.startTime}
          place={descriptionData.place}
          placeUrl={descriptionData.placeUrl}
          advancePrice={descriptionData.advancePrice}
          sameDayPrice={descriptionData.sameDayPrice}
          isOneDrink={descriptionData.isOneDrink}
        />
        {/* TODO: 詳細エリアを実装する */}
        {/* <DetailArea
          detailText={descriptionData.detail}
        /> */}
      </div>
    </>
  )
}
