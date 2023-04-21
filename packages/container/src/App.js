import React from "react";
import MarketingApp from "./components/marketingApp";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const App = () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </Router>
    </StylesProvider>
  );
};

export default App;
