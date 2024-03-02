import Link from "next/link";
import Card from "../../component/Card";
import { Button, Typography } from "@mui/material";

const F3 = () => {
  return (
    <Card>
      <Typography variant="h4" color={"green"}>
        Folder-3
      </Typography>
      <Button>
        <Link href={"/f1"}>Folder-1</Link>
      </Button>
    </Card>
  );
};

export default F3;
