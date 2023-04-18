import React from "react";
import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";

import Album from "./pages/Landing";
import Pricing from "./pages/Pricing";

const App = () => {
  return (
      <StylesProvider>
        
        <Router>
          <Routes>
            <Route exact path="/pricing" element={<Pricing />} />
            <Route exact path="/" element={<Album />} />
          </Routes>
        </Router>
      </StylesProvider>
  );
};

export default App;
