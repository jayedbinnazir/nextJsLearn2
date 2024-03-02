import React from "react";
import ImageCard from "../component/ImageCard";
import { wonderImage } from "../component/imagedata";
import { Box } from "@mui/material";

const PhotoDetails = ({ params }: { params: { id: string } }) => {
  const id = parseInt(params.id);

  const { name, alt, src, description, title } = wonderImage[id - 1];

  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <ImageCard
        name={name}
        id={id}
        alt={alt}
        src={src}
        description={description}
        title={title}
      />
    </Box>
  );
};

export default PhotoDetails;
