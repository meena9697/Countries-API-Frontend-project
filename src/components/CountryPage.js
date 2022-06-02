import React from "react";
import { Link } from "react-router-dom";
import { matchPath, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchCountryData } from "../redux/action/countryAction";
// import useCountry from "../custom-hooks/useCountry";

// import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";

export default function CountryPage() {
  const dispatch = useDispatch();
  const location = useLocation();
  const match = matchPath({ path: "/countries/:id" }, location.pathname);
  const country_name = match.params.id;

  const country = useSelector(
    (appState) => appState.countryitemData.countryitemData
  );

  const seleted_country = country.filter(
    (data) => data.name.common.toLowerCase() === country_name.toLowerCase()
  )[0];

  const loading = useSelector((appState) => appState.countryitemData.loading);
  const error = useSelector((appState) => appState.countryitemData.error);

  useEffect(() => {
    console.log("CHECK USE EFFECT");
    console.log(country_name);
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
        <CardMedia sx={{ textAlign: "center" }}>
          <img src={seleted_country.flags.png} alt={""} />
        </CardMedia>
        <CardContent sx={{ textAlign: "center" }}>
          <Typography
            sx={{ fontSize: 20, color: "black" }}
            color="text.secondary"
            gutterBottom
          >
            Country: {country_name}
          </Typography>
          <Typography
            sx={{ fontSize: 20, color: "black" }}
            color="text.secondary"
            gutterBottom
          >
            Region: {seleted_country.region}
          </Typography>
          <Typography
            sx={{ fontSize: 20, color: "black" }}
            color="text.secondary"
            gutterBottom
          >
            Population: {seleted_country.population}
          </Typography>
          {Object.keys(seleted_country.languages).map((key) => {
            return (
              <Typography
                sx={{ fontSize: 20, color: "black" }}
                color="text.secondary"
                gutterBottom
                key={seleted_country.cca2}
              >
                Languages: {seleted_country.languages[key]}
              </Typography>
            );
          })}
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Link to="/countries">Back</Link>
        </CardActions>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      {seleted_country ? card() : <div>I do not have any item</div>}
    </React.Fragment>
  );
}
