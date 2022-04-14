// @emotions
import { css } from "@emotion/css";

const LinkToNPMCss = css({
  color: "aliceblue",
  textDecoration: "none",
  "&:hover": {
    color: "#bdbbbb",
  },
});

const NavbarCss = css({
  width: "100vw",
  paddingLeft: 10,
  height: 55,
  background: "#222333ec",
  display: "flex",
});

export { LinkToNPMCss };

export default NavbarCss;
