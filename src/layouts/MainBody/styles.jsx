// @emotion
import { css } from "@emotion/css";

const MarkdownCss = css({
  color: "aliceblue",
  a: {
    color: "dodgerblue",
  },
  code: {
    background: "#222333",
    padding: 10,
    borderRadius: 10,
    margin: "0 5px",
    color: "#bdbbbb",
  },
  pre: {
    display: "flex",
    code: {
      background: "#222333",
      padding: 15,
      borderRadius: 12,
      width: "100%",
      color: "#bdbbbb",
      overflowX: "auto",
    },
  },
});

const MainContentCss = css({
  height: "100%",
  background: "none !important",
  backdropFilter: "none !important",
  padding: 0,
  borderRadius: 0,
  overflow: "auto",
});

const MainBody = css({
  minWidth: 500,
  width: "calc(100% - 350px)",
  margin: "0 20px",
  height: "90vh",
  padding: "10px 0",
  minHeight: 300,
});

export default MainBody;

export { MainContentCss, MarkdownCss };
