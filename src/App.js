/* eslint-disable react/function-component-definition */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable react/jsx-no-undef */
import { useEffect, useState } from "react";

// lang
import languages from "lang/lang";

// react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// context
import { useLanguage } from "context/Language";

// layouts
import Main from "layouts/Main/Main";

// views
import Home from "views/Home/Home";
import Start from "views/Start/Start";

const App = () => {
  const { setLanguageState } = useLanguage();

  const [currentLang, setCurrentLang] = useState("es");

  useEffect(() => {
    // fetching from local storage
    const lang =
      localStorage.getItem("lang") === null || localStorage.getItem("lang") === undefined
        ? "en"
        : localStorage.getItem("lang");
    if (lang !== window.navigator.language) localStorage.setItem("lang", window.navigator.language);
    setLanguageState({ type: "set", to: lang });
    setCurrentLang(lang.split("-")[0]);
  }, []);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Start texts={languages[currentLang].Start} />} />
          <Route path="/docs" element={<Home texts={languages[currentLang].Home} />}>
            {/*
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
          */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
