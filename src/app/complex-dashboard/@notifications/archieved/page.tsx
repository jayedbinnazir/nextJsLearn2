import Card from "@/app/component/Card";
import { Button, Typography } from "@mui/material";
import Link from "next/link";

const Archieved = () => {
  return (
    <Card>
      <Typography variant="h5" color={"green"}>
        Archieved
      </Typography>
      <Button>
        <Link href={"/complex-dashboard"}>DEfault</Link>
      </Button>
    </Card>
  );
};

export default Archieved;
