import React from "react";
import { Link } from "react-router-dom";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

export default function MyTableRow({ columns, row }) {
  return (
    <TableRow
      hover
      role="checkbox"
      tabIndex={-1}
      key={row.code}
      style={{ background: "lightgray" }}
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
          default:
            result = null;
            break;
        }
        const value = result;
        return (
          <TableCell key={column.id} align={column.align}>
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
