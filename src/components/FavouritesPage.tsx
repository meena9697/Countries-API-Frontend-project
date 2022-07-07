import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import { CardMedia, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { removeFavouriteCountries } from "../redux/action/countriesAction";
import { AppState, Country } from "../types";

export default function FavouritesPage() {
  const dispatch = useDispatch();

  const favouritesCartList = useSelector(
    (appState: AppState) => appState.favouritesData.favouritesCart
  );

  function DeleteCountryFromFavourites(favCountry: Country) {
    dispatch(removeFavouriteCountries(favCountry));
  }

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-between",
          maxWidth: "1500px",
          padding: "2rem",
        }}
      >
        {favouritesCartList.map((favCountry) => {
          return (
            <Card
              sx={{
                maxwidth: 300,
                maxheight: 1000,
                margin: "1rem",
                textAlign: "center",
              }}
            >
              <CardHeader title={favCountry.name.common} />
              <CardMedia>
                <img src={favCountry.flags.png} />
              </CardMedia>
              <Typography sx={{ fontSize: 20, color: "black" }}>
                <b>Region</b>: {favCountry.region}
              </Typography>
              <Typography sx={{ fontSize: 20, color: "black" }}>
                <b>Population</b>: {favCountry.population}
              </Typography>
              <Typography sx={{ fontSize: 20, color: "black" }}>
                <b>Languages</b>:
              </Typography>
              {Object.keys(favCountry.languages).map((key) => {
                return (
                  <Typography
                    sx={{ fontSize: 20, color: "black" }}
                    color="text.secondary"
                    key={favCountry.cca2}
                  >
                    {favCountry.languages[key]}
                  </Typography>
                );
              })}
              <Typography sx={{ fontSize: 20, color: "black" }}>
                <b>Currencies</b>:
              </Typography>
              {Object.keys(favCountry.currencies).map((currency) => {
                return (
                  <Typography
                    sx={{ fontSize: 20, color: "black" }}
                    color="text.secondary"
                    key={favCountry.currencies[currency].name}
                    component="p"
                  >
                    {favCountry.currencies[currency].name},
                    {favCountry.currencies[currency].symbol}
                  </Typography>
                );
              })}
              <IconButton
                aria-label="Delete"
                onClick={() => DeleteCountryFromFavourites(favCountry)}
              >
                <DeleteIcon />
              </IconButton>
            </Card>
          );
        })}
      </Box>
      <CardActions sx={{ justifyContent: "center" }}>
        <Link to="/countries">
        <Button variant="contained">Back</Button>
        </Link>
      </CardActions>
    </React.Fragment>
  );
}
