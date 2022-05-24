import React from "react";
import TableBody from "@mui/material/TableBody";
import MyTableRow from "./MyTableRow";

export default function MyTableBody({
    countriesdata,
    page,
    rowsPerPage,
    columns,
}) {
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