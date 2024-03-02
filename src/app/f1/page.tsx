import React from "react";
import Card from "../component/Card";
import { Typography, Button } from "@mui/material";
import Link from "next/link";

const F1 = () => {
  return (
    <Card>
      <Typography variant="h4" color={"green"}>
        Folder-1
      </Typography>
      <Button>
        <Link href={"/f1/f2"}>Folder-2</Link>
      </Button>
    </Card>
  );
};

export default F1;
