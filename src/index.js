import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

// context
import { LanguageProvider } from "context/Language";
import { IndexProvider } from "context/IndexContext";

// views
import App from "./App";

// styles
import "./index.css";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(
  <StrictMode>
    <IndexProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </IndexProvider>
  </StrictMode>
);
