import React from "react";
import { Link } from "react-router-dom";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton } from "@mui/material";
import { useContext } from "react";

import { ThemeContext, themes } from "../Components/Theme";

export default function MyTableRow({ columns, row }) {
  const { theme } = useContext(ThemeContext);

  const themeColor = themes[theme];

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
              <IconButton style={{ color: "red" }}>
                <FavoriteBorderIcon />
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
            sx={{ color: themeColor.text }}
          >
            {column.id === "languages" ? (
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
