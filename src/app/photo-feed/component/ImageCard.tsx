import React from "react";
import photo1 from "../photos/2.jpg";
import { Box, Paper, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { title } from "process";

const ImageCard = ({
  src,
  name,
  title,
  id,
  description,
  alt,
  style,
}: {
  src: StaticImageData;
  name: string;
  title: string;
  id: number;
  description: string;
  alt: string;
  style?: React.CSSProperties;
}) => {
  return (
    <Paper
      sx={{ display: "inline-flex", flexDirection: "column", ...style }}
      elevation={5}
    >
      <Image src={src} className="object-cover aspect-square" alt={name} />
      <Box sx={{ padding: "13px", textAlign: "center" }}>
        <Typography variant="subtitle1" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {description}
        </Typography>
      </Box>
    </Paper>
  );
};

export default ImageCard;
