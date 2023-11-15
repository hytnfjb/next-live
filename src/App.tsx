/** @jsxImportSource @emotion/react */
import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';
import { Top } from './Components/Pages/Top';

function App() {
  return (
    <>
      <Global styles={css`
        ${emotionReset}
        body {
          font-family: "ヒラギノ角ゴ ProN W3", HiraKakuProN-W3, 游ゴシック, "Yu Gothic", メイリオ, Meiryo, Verdana, Helvetica, Arial, sans-serif;
        }

        *, *::after, *::before {
          box-sizing: border-box;
        }
      `} />
      <Top />
    </>
  );
}

export default App;
