import React from "react";
import "./App.scss";

// Pages
import Home from "./pages/Home";

// Components
import Header from "./components/header/Header";

function App() {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
}

export default App;
