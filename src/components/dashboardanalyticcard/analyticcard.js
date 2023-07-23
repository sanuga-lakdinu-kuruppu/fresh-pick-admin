import React from "react";
import { Box } from "@mui/material";

import { DefaultButton } from "../common/defaultbtn";

function AnalyticCard(props) {
  return (
    <div className="">
      <Box
        sx={{
          backgroundColor: `${props.backgroundColor}`,
          borderRadius: 5,
          width: props.width,
        }}
      >
        <div className="d-flex mx-2 my-2 align-content-between">
          <div className="mx-3">
            <img src={props.sideImage} alt="Team" />
          </div>
          <div className="">
            <div className="h5 mt-2 fw-medium text-white">{props.header}</div>
            <div className="h2 fw-bolder text-white">{props.value}</div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <div className="mx-3 my-2 w-100">
            <DefaultButton sx={{ minWidth: "100%", width: "100%" }}>
              More
            </DefaultButton>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default AnalyticCard;
