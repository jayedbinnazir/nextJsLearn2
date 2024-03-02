import Card from "@/app/component/Card";
import { Button, Typography } from "@mui/material";
import Link from "next/link";

const Notification = () => {
  return (
    <Card>
      <Typography variant="h5" color={"green"}>
        Notifications
      </Typography>
      <Button>
        <Link href={"/complex-dashboard/archieved"}>Achieved</Link>
      </Button>
    </Card>
  );
};

export default Notification;
