import { Search } from "@mui/icons-material";
import {
  Autocomplete,
  FormControl,
  FormLabel,
  IconButton,
  InputAdornment,
  MenuItem,
  TextField,
} from "@mui/material";
import React from "react";
import {
  SearchMenuData,
  GloableSearchOption as gloableSearchOption,
} from "../../utils/constants/uiconstants.js";

function SearchBox() {
  return (
    <FormControl id="gloable-search-box">
      <Autocomplete
        placeholder="Search here"
        type="search"
        freeSolo
        size="small"
        disableClearable
        options={gloableSearchOption.map((searchItem) => searchItem.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            className="text"
            label="Search here"
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              type: "search",
              style: { minWidth: 250, borderRadius: 75 },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton type="submit" aria-label="search">
                    <Search style={{ fill: "blue" }} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </FormControl>
  );
}

export default SearchBox;
