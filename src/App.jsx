import React from "react";
import Home from "./components/Home";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
   
      <main className="wrapper">
        <Home />
        <Features />
        <CTA/>
        <Footer/>
      </main>

  );
}

export default App;
