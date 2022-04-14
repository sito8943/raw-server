/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
/* eslint-disable react/self-closing-comp */
import { useState, useEffect } from "react";

// prop-types
import PropTypes from "prop-types";

// codememe2share components
import MemeShare from "codememe2share";

// own components
import Loader from "components/Loader/Loader";

// layouts
import Navbar from "layouts/Navbar/Navbar";
import IndexSidebar from "layouts/IndexSidebar/IndexSidebar";
import MainBody from "layouts/MainBody/MainBody";

const Home = (props) => {
  const { texts } = props;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <>
      <Navbar />
      <MemeShare background="random">
        <Loader visible={loading} />
        <IndexSidebar texts={texts.Index} />
        <MainBody texts={texts.Main} />
      </MemeShare>
    </>
  );
};

Home.propTypes = {
  texts: PropTypes.objectOf(PropTypes.any),
};

export default Home;
