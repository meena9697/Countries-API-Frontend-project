import React, { useContext } from "react";
import { useDispatch } from "react-redux";

import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";

import { searchCountriesResult } from "../redux/action/countriesAction";
import { ThemeContext } from "./Theme";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "30ch",
    },
  },
}));

function SearchButton() {
  const { theme } = useContext(ThemeContext);

  const dispatch = useDispatch();
  function handleChange(e : any) {
    dispatch(searchCountriesResult(e.target.value));
  }
  return (
    <div>
      <Search>
        <SearchIconWrapper>
          <SearchIcon sx={{ color: theme.text }} />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search Country..."
          inputProps={{ "aria-label": "search" }}
          sx={{ color: theme.text }}
          onChange={handleChange}
        />
      </Search>
    </div>
  );
}

export default SearchButton;
