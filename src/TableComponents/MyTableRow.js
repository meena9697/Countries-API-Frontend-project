import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";

import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";

import {
  AddFavouriteCountries,
  RemoveFavouriteCountries,
} from "../redux/action/countriesAction";
import { ThemeContext, themes } from "../Components/Theme";

export default function MyTableRow({ columns, row }) {
  const dispatch = useDispatch();

  const { theme } = useContext(ThemeContext);

  const themeColor = themes[theme];

  const favouritesCart = useSelector(
    (appState) => appState.favouritesData.favouritesCart
  );

  const onClickHandler = (favCountry) => {
    const itemExist = favouritesCart.some((item) => {
      return item.name.common === favCountry.name.common;
    });
    if (itemExist) {
      dispatch(RemoveFavouriteCountries(favCountry));
    } else {
      dispatch(AddFavouriteCountries(favCountry));
    }
  };
  function ToggleFavouriteIcon(favCountry) {
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
      sx={{ backgroundColor: themeColor.background }}
    >
      {columns.map((column) => {
        let result = "";
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
        // console.log(typeof value)
        return (
          <TableCell
            key={column.id}
            align={column.align}
            sx={{ color: themeColor.text }}
          >
            {column.format ? (
              column.format(result)
            ) : column.id === "languages" && value ? (
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
