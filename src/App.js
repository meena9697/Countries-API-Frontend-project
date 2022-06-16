import React from "react";
import { Route, Routes } from "react-router-dom";
import ButtonPage from "./Components/ButtonPage";
import CountriesPage from "./Components/CountriesPage";
import CountryPage from "./Components/CountryPage";
import FavouritesPage from "./Components/FavouritesPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ButtonPage />} />
        <Route path="/countries" element={<CountriesPage />} />
        <Route path="/countries/:country_name" element={<CountryPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />

      </Routes>
    </>
  );
}
export default App;
