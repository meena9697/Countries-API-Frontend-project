import React from "react";
import { useDispatch} from "react-redux";

import { sortBy } from "../redux/action/countriesAction";

import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { TableSortLabel } from "@mui/material";
import { Column } from "../types";

type TableHead = {
  columns: Column[],
}

export default function MyTableHead({ columns }:TableHead ) {
  const dispatch = useDispatch<any>();

  const handleSorting = (label: string) => {
    dispatch (sortBy(label));
  }
  return (
    <TableHead>
      <TableRow>
        {columns.map((column: Column) => (
          <TableCell
            key={column.id}
            align={column.align}
            style={{
              minWidth: column.minWidth,
              fontWeight: "bold",
              backgroundColor: "white",
              fontSize: 25,
            }}
          >
            {column.label}
            <TableSortLabel onClick={() => handleSorting(column.id)} />
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
