/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
/* eslint-disable react/self-closing-comp */
import React, { useEffect, useState } from "react";

// react-markdown
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

// prop-types
import PropTypes from "prop-types";

// context
import { useIndex } from "context/IndexContext";

// codememe2share components
import { Container, AppleDots } from "codememe2share";

// services
import { FetchMarkdown } from "services/post";

// styles
import MainBodyCss, { MainContentCss, MarkdownCss } from "./styles";

const MainBody = (props) => {
  const { texts } = props;

  const { indexState } = useIndex();

  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(async () => {
    const newMarkdownContent = await FetchMarkdown(texts.Content[indexState.index]);
    setMarkdownContent(newMarkdownContent);
  }, [texts, indexState.index]);

  return (
    <Container className={MainBodyCss}>
      <Container style={{ minHeight: 300, height: "calc(90vh - 20px)" }}>
        <AppleDots />
        <Container className={MainContentCss}>
          <ReactMarkdown className={MarkdownCss}>{markdownContent}</ReactMarkdown>
        </Container>
      </Container>
    </Container>
  );
};

MainBody.propTypes = {
  texts: PropTypes.objectOf(PropTypes.any),
};

export default MainBody;
