import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import FormControlLabel from "@mui/material/FormControlLabel";
import FavoriteIcon from "@mui/icons-material/Favorite";


import { ThemeContext, themes } from "./Theme";

export default function FavouritesButton() {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
console.log(theme,"thisnis theme")
  const themeColor = themes[theme];

  return (
    <div>
    <FormControlLabel
      control={<FavoriteIcon sx={{ color: "red" }} />}
      label="Favourites"
      sx={{
        color: themeColor.text,
        marginLeft: "20rem",
        fontSize: "1rem",
      }}
      onClick={() => navigate("/favourites")}
    />
  </div>  )
}
