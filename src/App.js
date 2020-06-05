import React from "react";
// Components
import Banner from "./components/Banner";
import Collection from "./components/Collection";
import Contact from "./components/Contact";
import Customers from "./components/Customers";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Mission from "./components/Mission";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <Banner />
      </header>
      <Mission />
      <Collection />
      <Gallery />
      <Customers />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
