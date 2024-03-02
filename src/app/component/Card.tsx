import { Paper, Typography } from "@mui/material";
import { ReactText } from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "350px",
        width: "350px",
      }}
      elevation={6}
    >
      {children}
    </Paper>
  );
};

export default Card;
