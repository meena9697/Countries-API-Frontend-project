import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import FormControlLabel from "@mui/material/FormControlLabel";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { ThemeContext } from "./Theme";

export default function FavouritesButton() {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  return (
    <div>
    <FormControlLabel
      control={<FavoriteIcon sx={{ color: "red" }} />}
      label="Favourites"
      sx={{
        color: theme.text,
        marginLeft: "20rem",
        fontSize: "1rem",
      }}
      onClick={() => navigate("/favourites")}
    />
  </div>  )
}
