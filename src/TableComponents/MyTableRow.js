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
            if (column.id === "flags") {
              result = <img src={row.flags.png} alt={""} />;
            } else if (column.id === "name") {
              result = (
                <Link to={`/countries/${row.name.common}`}>
                  {row.name.common}
                </Link>
              );
            } else if (column.id === "region") {
              result = row.region;
            } else if (column.id === "population") {
              result = row.population;
            } else if (column.id === "languages") {
              result = row.languages;
            } else {
              result = null;
            }
            const value = result;
            return (
              <TableCell key={column.id} align={column.align}>
                {column.format ? (
                  column.format(result)
                ) : column.id === "languages" ? (
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
