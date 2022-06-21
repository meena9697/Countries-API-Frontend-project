import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchCountryData } from "../redux/action/countryAction";
import { AppState } from "../types";

import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";

export default function CountryPage() {
  const { country_name } = useParams();
  console.log(country_name, "COUNTRY");

  const dispatch = useDispatch<any>();

  const state = useSelector((appState) => appState);
  console.log(state, "this is state");

  const {countryitemData: country,error,loading} = useSelector((appState: AppState) => appState.countryitemData);

  const seleted_country = country.filter((data) =>
    data.name.common.toLowerCase()
  )[0];

  useEffect(() => {
    dispatch(fetchCountryData(country_name));
  }, [dispatch, country_name]);

  if (error) return <div>There is an error</div>;
  if (loading)
    return (
      <div>
        <h1>Loading..</h1>
      </div>
    );

  function card() {
    return (
      <React.Fragment>
        <Typography
          sx={{
            fontSize: 20,
            color: "black",
            textAlign: "center",
            marginTop: "5rem",
            marginRight: "5rem",
          }}
          color="text.secondary"
          gutterBottom
        >
          <b>{seleted_country.name.common}</b>
        </Typography>
        <Box
          sx={{
            display: "flex",
            marginLeft: "35rem",
            maxHeight: "50rem",
          }}
        >
          <Card>
            <CardMedia sx={{ textAlign: "center" }}>
              <img src={seleted_country.flags.png} alt={""} />
            </CardMedia>
            <CardContent sx={{ textAlign: "center" }}>
              <Typography
                sx={{ fontSize: 20, color: "black" }}
                color="text.secondary"
                gutterBottom
              >
                <b>Region</b>: {seleted_country.region}
              </Typography>
              <Typography
                sx={{ fontSize: 20, color: "black" }}
                color="text.secondary"
                gutterBottom
              >
                <b>Population</b>: {seleted_country.population}
              </Typography>

              <Typography sx={{ fontSize: 20, color: "black" }}>
                <b>Languages</b>:
              </Typography>
              {Object.keys(seleted_country.languages).map((key) => {
                return (
                  <Typography
                    sx={{ fontSize: 20, color: "black" }}
                    color="text.secondary"
                    gutterBottom
                    key={seleted_country.cca2}
                  >
                    {seleted_country.languages[key]}
                  </Typography>
                );
              })}
              <Typography sx={{ fontSize: 20, color: "black" }}>
                <b>Currencies</b>:
              </Typography>
              {Object.keys(seleted_country.currencies).map((currency) => {
                return (
                  <Typography
                    sx={{ fontSize: 20, color: "black" }}
                    color="text.secondary"
                    key={seleted_country.currencies[currency].name}
                    component="p"
                  >
                    {seleted_country.currencies[currency].name},
                    {seleted_country.currencies[currency].symbol}
                  </Typography>
                );
              })}
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <Link to="/countries">Back</Link>
            </CardActions>
          </Card>
        </Box>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      {seleted_country ? card() : <div>I do not have any item</div>}
    </React.Fragment>
  );
}
