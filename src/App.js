import React from "react";
import { Route, Routes } from "react-router-dom";
import ButtonPage from "./Pages/ButtonPage";
import CountriesPage from "./Pages/CountriesPage";
import CountryPage from "./Pages/CountryPage";

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
