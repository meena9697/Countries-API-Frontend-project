import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import useCountries from "../custom-hooks/useCountries";
import MyTableBody from "../TableComponents/MyTableBody";
import MyTableHead from "../TableComponents/MyTableHead";
import { fetchCountries } from "../redux/countriesAction";

const columns = [
  {
    id: "flags",
    label: "Flag",
    minWidth: 170,
    align: "left",
  },
  { id: "name", label: "Name", minWidth: 170 },
  { id: "region", label: "Region", minWidth: 100 },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    align: "left",
    // format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "languages",
    label: "Languages",
    minWidth: 170,
    align: "left",
  },
];

function CountriesPage() {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // const { countriesdata, error, loading } = useCountries(
  //   "https://restcountries.com/v3.1/all"
  // );

  const countriesdata = useSelector((appState) => appState.countriesData);
  console.log(countriesdata, "check")
  const loading = useSelector((appState) => appState.loading);
  const error = useSelector((appState) => appState.error);

  const handleSearch = (e) => {
    setKeyword(e.target.value);
  };

  const countriesSearch = Array.from(countriesdata.countriesData)?.filter((country) =>
    country.name.common.toLowerCase().includes(keyword)
  );

  useEffect(() => {
    dispatch(fetchCountries());
    console.log("testing");
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
      <input placeholder="Search country..." onChange={handleSearch}></input>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 650 }}>
          <Table stickyHeader aria-label="sticky table">
            <MyTableHead columns={columns} />
            <MyTableBody
              countriesdata={countriesdata.countriesData}
              rowsPerPage={rowsPerPage}
              page={page}
              columns={columns}
              countriesSearch={countriesSearch}
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
