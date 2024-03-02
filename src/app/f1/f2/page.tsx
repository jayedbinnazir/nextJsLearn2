import Link from "next/link";
import Card from "../../component/Card";
import { Button, Typography } from "@mui/material";

const F2 = () => {
  return (
    <Card>
      <Typography variant="h4" color={"green"}>
        Folder-2
      </Typography>
      <Button>
        <Link href={"/f1/f3"}>Folder-3</Link>
      </Button>
    </Card>
  );
};

export default F2;
