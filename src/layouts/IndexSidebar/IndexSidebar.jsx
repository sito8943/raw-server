/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
/* eslint-disable react/self-closing-comp */
import React from "react";

// prop-types
import PropTypes from "prop-types";

// context
import { useIndex } from "context/IndexContext";

// codememe2share components
import { Container, AppleDots, Title, Button, Paragraph } from "codememe2share";

// styles
import IndexSidebarCss, { IndexContentCss, ListButtonCss, IndexSelectedCss } from "./styles";

const IndexSidebar = (props) => {
  const { texts } = props;

  const { indexState, setIndexState } = useIndex();

  const listButtonClicked = (e) => {
    const { id } = e.target;
    setIndexState({ type: "set", to: Number(id.substring(1)) });
  };

  return (
    <Container className={IndexSidebarCss}>
      <Container className={IndexContentCss}>
        <AppleDots />
        <Title variant="h4">{texts.Title}</Title>
        {texts.Content.map((item, i) => {
          return item.Content ? (
            <div key={`d${i}`} style={{ display: "flex", flexDirection: "column" }}>
              <Paragraph>{item.Title}</Paragraph>
              {item.Content.map((jtem, j) => (
                <Button
                  action={listButtonClicked}
                  className={`${ListButtonCss} ${
                    indexState.index === jtem.Id ? IndexSelectedCss : ""
                  }`}
                  ignoreDefault
                  key={`i${j}`}
                  id={`i${jtem.Id}`}
                >
                  {jtem.Label}
                </Button>
              ))}
            </div>
          ) : (
            <Button
              action={listButtonClicked}
              className={`${ListButtonCss} ${indexState.index === item.Id ? IndexSelectedCss : ""}`}
              ignoreDefault
              key={`id${i}`}
              id={`i${item.Id}`}
            >
              {item.Title}
            </Button>
          );
        })}
      </Container>
    </Container>
  );
};

IndexSidebar.propTypes = {
  texts: PropTypes.objectOf(PropTypes.any),
};

export default IndexSidebar;
