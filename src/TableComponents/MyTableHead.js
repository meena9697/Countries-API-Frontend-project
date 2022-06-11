import React from "react";
import { useDispatch} from "react-redux";

import { SortByName, SortByPopulation, SortByRegion } from "../redux/action/countriesAction";

import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { TableSortLabel } from "@mui/material";

export default function MyTableHead({ columns}) {
  const dispatch = useDispatch();

  const handleSorting = () => {
        dispatch (SortByRegion());
  }

  const handlenameSorting = ()=>{
    dispatch (SortByName());
  };
  
  const handlepopSorting = ()=>{
    dispatch (SortByPopulation());
  };

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
            <TableSortLabel onClick={handleSorting} />
            {/* <TableSortLabel onClick={handlenameSorting} /> */}

          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
