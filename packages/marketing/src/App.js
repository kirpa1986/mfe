import React from "react";
import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";

import Album from "./pages/Landing";
import Pricing from "./pages/Pricing";

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma'
});

const App = () => {
  return (
      <StylesProvider generateClassName={generateClassName}>
        
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
