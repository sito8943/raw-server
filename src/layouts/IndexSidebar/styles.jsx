// @emotion
import { css } from "@emotion/css";

const IndexSelectedCss = css({
  color: "#bdbbbb !important",
});

const ListButtonCss = css({
  background: "none",
  border: "none",
  color: "aliceblue",
  fontWeight: 500,
  textAlign: "left",
  fontSize: 15,
  cursor: "pointer",
  marginTop: 10,
  "&:hover": {
    color: "#bdbbbb",
  },
});

const IndexContentCss = css({
  height: "100%",
  overflow: "auto",
});

const IndexSidebarCss = css({
  width: 340,
  marginLeft: 20,
  height: "90vh",
  minHeight: 300,
});

export { IndexContentCss, ListButtonCss, IndexSelectedCss };

export default IndexSidebarCss;
