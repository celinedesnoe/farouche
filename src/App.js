import React from "react";
import WelcomePage from "./components/WelcomePage";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook as fabFacebook,
  faInstagram as fabInstagram,
} from "@fortawesome/free-brands-svg-icons";

library.add(fabFacebook, fabInstagram);

function App() {
  return (
    <div>
      <WelcomePage />
    </div>
  );
}

export default App;
