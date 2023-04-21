import React from "react";
import MarketingApp from "./components/marketingApp";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <MarketingApp />
      </div>
    </Router>
  );
};

export default App;
