"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ImageCard from "../../../component/ImageCard";
import { wonderImage } from "../../../component/imagedata";

const style: React.CSSProperties = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: "background.paper",
};

export default function BasicModal({ params }: { params: { id: string } }) {
  const id = parseInt(params.id);

  const { name, alt, src, description, title } = wonderImage[id - 1];

  return (
    <div>
      <Modal
        open={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ImageCard
          name={name}
          id={id}
          alt={alt}
          src={src}
          description={description}
          title={title}
          style={style}
        />
      </Modal>
    </div>
  );
}
