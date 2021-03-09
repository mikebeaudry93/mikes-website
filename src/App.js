import React from "react";
import "./App.scss";
import ParticlesBg from "particles-bg";
import { Helmet } from "react-helmet";

// Pages
import Home from "./pages/Home";

// Components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Michael Beaudry</title>
        <meta name="description" content="Personal portfolio."/>
      </Helmet>
      <ParticlesBg color="#035096" num={10} type="circle" bg={true} />
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
