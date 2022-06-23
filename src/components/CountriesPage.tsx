import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navigation from "./Navigation";

import MyTableBody from "../TableComponents/MyTableBody";
import MyTableHead from "../TableComponents/MyTableHead";
import { fetchCountries } from "../redux/action/countriesAction";
import { AppState, Column } from "../types";

const columns: Column[] = [
  {
    id: "flags",
    label: "Flag",
    minWidth: 170,
    align: "left",
  },
  { id: "name", label: "Name", minWidth: 170, align: "left" },
  { id: "region", label: "Region", minWidth: 170, align: "left" },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "languages",
    label: "Languages",
    minWidth: 170,
    align: "left",
  },
  { id: "favourites", label: "Favourites", align: "left" },
];

function CountriesPage() {
  const dispatch = useDispatch<any>();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const countriesdata = useSelector(
    (appState: AppState) => appState.countriesData
  );
  const loading = useSelector(
    (appState: AppState) => appState.countriesData.loading
  );
  const error = useSelector(
    (appState: AppState) => appState.countriesData.error
  );

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  if (error) return <div>There is an error</div>;
  if (loading)
    return (
      <div>
        <h1>Loading..</h1>
      </div>
    );
  return (
    <div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <Navigation />
        <TableContainer sx={{ maxHeight: 650 }}>
          <Table stickyHeader aria-label="sticky table">
            <MyTableHead columns={columns} />
            <MyTableBody
              countriesdata={countriesdata.SearchCountries}
              rowsPerPage={rowsPerPage}
              page={page}
              columns={columns}
            />
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={countriesdata.countriesData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
export default CountriesPage;
