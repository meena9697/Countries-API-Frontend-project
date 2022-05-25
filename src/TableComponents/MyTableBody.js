import React from "react";
import TableBody from "@mui/material/TableBody";
import MyTableRow from "./MyTableRow";

export default function MyTableBody({
    countriesSearch,
    page,
    rowsPerPage,
    columns,
}) {
    return (
        <>
            <TableBody>
              {countriesSearch &&
                countriesSearch
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                        return <MyTableRow row={row} columns={columns} />;
                    })}
            </TableBody>
        </>
    );
}