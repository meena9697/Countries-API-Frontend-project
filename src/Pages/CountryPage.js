import React from "react";

import useCountry from "../custom-hooks/useCountry";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import { matchPath, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function CountryPage() {
  const location = useLocation();
  const match = matchPath({ path: "/countries/:id" }, location.pathname);
  const country_name = match.params.id;
  console.log(country_name);

  const { country, error, loading } = useCountry(
    `https://restcountries.com/v3.1/name/${country_name}`
  );
  console.log(country);

  if (error) return <div>There is an error</div>;
  if (loading)
    return (
      <div>
        <h1>Loading..</h1>
      </div>
    );

  const seleted_country = country.filter(
    (data) => data.name.common.toLowerCase() === country_name.toLowerCase()
  )[0];
  console.log(seleted_country);

  const card = (
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
        <Typography
          sx={{ fontSize: 20, color: "black" }}
          color="text.secondary"
        >
          <p>Languages:</p>
          {Object.keys(seleted_country.languages).map((key) => {
            return (
              <p key={seleted_country.cca2}>{seleted_country.languages[key]}</p>
            );
          })}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button size="small">
          <Link to="/countries">Back</Link>
        </Button>
      </CardActions>
    </React.Fragment>
  );

  return <Card variant="outlined">{card}</Card>;
}
