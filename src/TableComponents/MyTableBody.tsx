import React from "react";

import TableBody from "@mui/material/TableBody";
import MyTableRow from "./MyTableRow";
import { Country, Column } from "../types";

type TableBody ={
  countriesdata: Country[]
  columns: Column[];
  rowsPerPage: number;
  page: number;
}

export default function MyTableBody({
  countriesdata,
  page,
  rowsPerPage,
  columns,
}: TableBody) {
  return (
    <>
      <TableBody>
        {countriesdata &&
          countriesdata
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => {
              return <MyTableRow row={row} columns={columns} />;
            })}
      </TableBody>
    </>
  );
}
