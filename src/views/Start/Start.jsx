/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/function-component-definition */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import { useState, useEffect } from "react";

// prop-types
import PropTypes from "prop-types";

// codememe2share components
import MemeShare, {
  Container,
  Rotate,
  AppleDots,
  LinkButton,
  Title,
  Paragraph,
} from "codememe2share";

// own components
import Loader from "components/Loader/Loader";

// icons
import { BsFillArrowRightCircleFill } from "react-icons/bs";

// images
import logo from "assets/images/logo.svg";

// styles
import { RotateCss, ParagraphCss, LinkButtonCss } from "./styles";

const Start = (props) => {
  const { texts } = props;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <MemeShare background="random">
      <Loader visible={loading} />
      {!loading && (
        <Container>
          <AppleDots />
          <Rotate className={RotateCss} delay="5s">
            <img src={logo} alt="react-logo" />
          </Rotate>
          <Title variant="h3">CodeMeme2Share</Title>
          <Paragraph className={ParagraphCss}>{texts.Content}</Paragraph>
          <LinkButton link="/docs" target="_self" className={LinkButtonCss}>
            {texts.Button}
            <BsFillArrowRightCircleFill />
          </LinkButton>
        </Container>
      )}
    </MemeShare>
  );
};

Start.propTypes = {
  texts: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Start;
