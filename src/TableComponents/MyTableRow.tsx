import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";

import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";

import {
  addFavouriteCountries,
  removeFavouriteCountries,
} from "../redux/action/countriesAction";
import { ThemeContext } from "../Components/Theme";
import { AppState, Country } from "../types";

export default function MyTableRow({ columns, row }) {
  const dispatch = useDispatch();

  const { theme } = useContext(ThemeContext);

  const favouritesCart = useSelector(
    (appState: AppState) => appState.favouritesData.favouritesCart
  );

  const onClickHandler = (favCountry: Country) => {
    const itemExist = favouritesCart.some((item) => {
      return item.name.common === favCountry.name.common;
    });
    if (itemExist) {
      dispatch(removeFavouriteCountries(favCountry));
    } else {
      dispatch(addFavouriteCountries(favCountry));
    }
  };
  function ToggleFavouriteIcon(favCountry: Country) {
    const itemExist = favouritesCart.some(
      (item) => item.name.common === favCountry.name.common
    );
    return itemExist;
  }

  return (
    <TableRow
      hover
      role="checkbox"
      tabIndex={-1}
      key={row.code}
      sx={{ backgroundColor: theme.background }}
    >
      {columns.map((column) => {
        let result;
        switch (column.id) {
          case "flags":
            result = <img src={row.flags.png} alt={""} />;
            break;
          case "name":
            result = (
              <Link to={`/countries/${row.name.common}`}>
                {row.name.common}
              </Link>
            );
            break;
          case "region":
            result = row.region;
            break;
          case "population":
            result = row.population;
            break;
          case "languages":
            result = row.languages;
            break;
          case "favourites":
            result = (
              <IconButton
                sx={() =>
                  ToggleFavouriteIcon(row)
                    ? { color: "red" }
                    : { color: "gray" }
                }
                onClick={() => onClickHandler(row)}
              >
                <FavoriteIcon />
              </IconButton>
            );
            break;
          default:
            result = null;
            break;
        }
        const value = result;
        return (
          <TableCell
            key={column.id}
            align={column.align}
            sx={{ color: theme.text }}
          >
            {column.format ? (
              column.format(result)
            ) : column.id === "languages"&& value ?(
              Object.keys(value).map((item) => {
                return <p>{value[item]}</p>;
              })
            ) : (
              <p>{value}</p>
            )}
          </TableCell>
        );
      })}
    </TableRow>
  );
}
