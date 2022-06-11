import React from "react";
import { useDispatch} from "react-redux";

import { SortBy } from "../redux/action/countriesAction";

import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { TableSortLabel } from "@mui/material";

export default function MyTableHead({ columns}) {
  const dispatch = useDispatch();

  const handleSorting = (label) => {
    dispatch (SortBy(label));
  }
  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
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
