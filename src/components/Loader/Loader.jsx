/* eslint-disable react/function-component-definition */
import React from "react";

// prop-types
import PropTypes from "prop-types";

// react-lottie
import Lottie from "react-lottie";

// codememe2share components
import { Loading, Container } from "codememe2share";

// images
import lottie from "assets/images/loading.json";

const Loader = (props) => {
  const { visible } = props;
  return (
    <Loading
      style={{
        transition: "all 1000 ease",
        opacity: visible ? 1 : 0,
        zIndex: visible ? 99 : -1,
        background: "#222333",
      }}
    >
      <Container style={{ width: 200, background: "none", backdropFilter: "none" }}>
        <Lottie options={{ animationData: lottie }} />
      </Container>
    </Loading>
  );
};

Loader.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default Loader;
