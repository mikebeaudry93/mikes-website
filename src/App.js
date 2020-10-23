import React from "react";
import "./App.scss";

// Pages
import Home from "./pages/Home";

// Components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
