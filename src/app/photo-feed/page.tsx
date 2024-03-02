import Image from "next/image";
import React from "react";
import photo1 from "./photos/1.jpg";
import ImageCard from "./component/ImageCard";
import { wonderImage } from "./component/imagedata";
import Link from "next/link";

const PhotoFeed = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "baseline",
        gap: 3,
      }}
    >
      {wonderImage.map((image) => {
        return (
          <Link key={image.id} href={`/photo-feed/${image.id}`}>
            <ImageCard
              name={image.name}
              id={image.id}
              alt={image.alt}
              src={image.src}
              description={image.description}
              title={image.title}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default PhotoFeed;
