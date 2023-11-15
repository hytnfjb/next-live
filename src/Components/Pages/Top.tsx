/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import MediaQuery from "react-responsive";
import { MainVisual } from "../Views/MainVisual";

export const Top = () => {
  return (
    <>
      <MediaQuery query="(max-width: 599px)">
        <MainVisual />
      </MediaQuery>
      <MediaQuery query="(min-width:600px) and (max-width:1024px)">
        <h1>
          製作中
        </h1>
        <p>※スマートフォンにて閲覧をお願いします</p>
      </MediaQuery>
      <MediaQuery query="(min-width: 1025px)">
        <h1>
          製作中
        </h1>
        <p>※スマートフォンにて閲覧をお願いします</p>
      </MediaQuery>
    </>
  )
}
