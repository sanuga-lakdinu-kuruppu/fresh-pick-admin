import { styled } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import React from "react";

const defaultdatepicker = styled(DatePicker)({
  "& .MuiInputBase-root": {
    height: "40px",
    fontSize: "18px",
    color: "#979797",
    minWidth: "100%",
  },
  "& .MuiSvgIcon-root": {
    color: "#2196f3",
    width: "15px",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#979797",
    borderRadius: "15px",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#2980b9",
  },
});
export const DefaultDatePicker = defaultdatepicker;
