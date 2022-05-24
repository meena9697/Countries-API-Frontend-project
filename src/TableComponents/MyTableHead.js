import React from "react";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

export default function MyTableHead({ columns }) {
  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <TableCell
            key={column.id}
            align={column.align}
            style={{
                minWidth: column.minWidth,
                fontWeight: "bolder",
                backgroundColor: "lightblue",
                fontSize: 25,
              }}>
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
