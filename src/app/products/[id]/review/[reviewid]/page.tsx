import { Typography } from "@mui/material";
import React from "react";

const ReviewDeatils = ({
  params,
}: {
  params: { id: string; reviewid: string };
}) => {
  return (
    <Typography variant="h3" color={"lightblue"}>
      {" "}
      Details For Products {params.id} - Review {params.reviewid}{" "}
    </Typography>
  );
};

export default ReviewDeatils;
