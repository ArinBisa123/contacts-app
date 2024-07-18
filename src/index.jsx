import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import ContactApp from "./components/ContactApp";
import "./style/style.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ContactApp> </ContactApp>;
  </BrowserRouter>
);
