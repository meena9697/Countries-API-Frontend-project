import React from "react";
import { Route, Routes } from "react-router-dom";
import ButtonPage from "./Components/ButtonPage";
import CountriesPage from "./Components/CountriesPage";
import CountryPage from "./Components/CountryPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ButtonPage />} />
        <Route path="/countries" element={<CountriesPage />} />
        <Route path="/countries/:id" element={<CountryPage />} />
      </Routes>
    </>
  );
}
export default App;
