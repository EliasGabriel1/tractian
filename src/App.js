import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DivSystem from "./components/DivSystem";
import SectionManutencao from "./components/SectionManutencao";
import Faixa from "./components/Faixa";
import Relatos from "./components/Relatos";

function App() {
  return (
    <>
      <Header/>
      <DivSystem/>
      <SectionManutencao/>
      <Faixa/>
      <Relatos/>
      <Footer/>
    </>
  );
}

export default App;
