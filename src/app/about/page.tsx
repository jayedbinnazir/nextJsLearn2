import { Typography } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "About",
  },
};

const About = () => {
  throw new Error("About Page Not Found");

  return (
    <div>
      <Typography variant="h2">This is about page</Typography>
    </div>
  );
};

export default About;
