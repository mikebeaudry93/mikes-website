import React from "react";
import "./App.scss";
import ParticlesBg from "particles-bg";

// Pages
import Home from "./pages/Home";

// Components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <ParticlesBg color="#035096" num={10} type="circle" bg={true} />
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
