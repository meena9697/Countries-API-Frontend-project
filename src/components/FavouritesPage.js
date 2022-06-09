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

import { RemoveFavouriteCountries } from "../redux/action/countriesAction";

export default function FavouritesPage() {
  const dispatch = useDispatch();

  const favouritesCartList = useSelector(
    (appState) => appState.favouritesData.favouritesCart
  );
  function DeleteCountryFromFavourites(favCountry) {
    dispatch(RemoveFavouriteCountries(favCountry));
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
                width: 250,
                height: 500,
                margin: "1rem",
                textAlign: "center",
              }}
            >
              <CardHeader title={favCountry.name.common} />
              <CardMedia
                component="img"
                alt="image"
                img
                src={favCountry.flags.png}
              />
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
              <IconButton
                aria-label="Delete"
                onClick={() => DeleteCountryFromFavourites(favCountry)}
              >
                <DeleteIcon />
              </IconButton>
            </Card>
          );
        })}
        <CardActions sx={{ justifyContent: "center" }}>
          <Link to="/countries">Back</Link>
        </CardActions>
      </Box>
    </React.Fragment>
  );
}
