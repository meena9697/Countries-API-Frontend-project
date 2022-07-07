import React from "react";
import { Link } from "react-router-dom";

import { Country } from "../types";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import BadgeIcon from "@mui/icons-material/Badge";
import LanguageIcon from "@mui/icons-material/Language";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import TranslateIcon from "@mui/icons-material/Translate";
import Button from "@mui/material/Button";

export default function CountryComp({
  seleted_country,
}: {
  seleted_country: Country;
}) {
  const [openCapital, setOpenCapital] = React.useState<boolean>(false);
  const [openRegion, setOpenRegion] = React.useState<boolean>(false);
  const [openCurrency, setOpenCurrency] = React.useState<boolean>(false);
  const [openLanguages, setOpenLanguages] = React.useState<boolean>(false);

  const handleClickCapital = () => {
    setOpenCapital(!openCapital);
  };

  const handleClickRegion = () => {
    setOpenRegion(!openRegion);
  };
  const handleClickCurrency = () => {
    setOpenCurrency(!openCurrency);
  };

  const handleClickLanguages = () => {
    setOpenLanguages(!openLanguages);
  };
  return (
    <div>
      <Typography variant="h2" sx={{ padding: "3rem", marginLeft: "37rem" }}>
        {seleted_country.name.common}
      </Typography>
      <div key={seleted_country.cca2}>
        <Card sx={{ maxWidth: 350, margin: "auto" }}>
          <CardMedia
            component="img"
            height="150"
            image={seleted_country.flags.png}
            alt={seleted_country.name.common + " flag"}
          />
          <CardContent>
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
              }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton onClick={handleClickCapital}>
                <ListItemIcon>
                  <BadgeIcon />
                </ListItemIcon>
                <ListItemText primary="Other Names" />
                {openCapital ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openCapital} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary={seleted_country.name.common} />
                  </ListItemButton>
                </List>
              </Collapse>
              <ListItemButton onClick={handleClickRegion}>
                <ListItemIcon>
                  <LanguageIcon />
                </ListItemIcon>
                <ListItemText primary="Region" />
                {openRegion ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openRegion} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary={seleted_country.region} />
                  </ListItemButton>
                </List>
              </Collapse>
              <ListItemButton onClick={handleClickCurrency}>
                <ListItemIcon>
                  <CurrencyExchangeIcon />
                </ListItemIcon>
                <ListItemText primary="Currencies" />
                {openCurrency ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openCurrency} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText
                      primary={
                        seleted_country.currencies &&
                        Object.keys(seleted_country.currencies).map((key) => {
                          return (
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              key={seleted_country.cca2 + key}
                            >
                              {seleted_country.currencies[key].name ? (
                                seleted_country.currencies[key].name
                              ) : (
                                <>NO CURRENCY</>
                              )}
                            </Typography>
                          );
                        })
                      }
                    />
                  </ListItemButton>
                </List>
              </Collapse>
              <ListItemButton onClick={handleClickLanguages}>
                <ListItemIcon>
                  <TranslateIcon />
                </ListItemIcon>
                <ListItemText primary="Languages" />
                {openLanguages ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openLanguages} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText
                      primary={
                        seleted_country.languages &&
                        Object.keys(seleted_country.languages).map((key) => {
                          return (
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              key={seleted_country.cca2 + key}
                            >
                              {seleted_country.languages[key]}
                            </Typography>
                          );
                        })
                      }
                    />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </CardContent>
          <CardActions></CardActions>
        </Card>
        <Link to="/countries">
          <Button
            variant="contained"
            sx={{ marginTop: "3rem", marginLeft: "45rem" }}
          >
            Back
          </Button>
        </Link>
      </div>
    </div>
  );
}
