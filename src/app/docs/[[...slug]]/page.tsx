"use client";
import { Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CatchAllDocs = ({
  params,
}: {
  params: {
    slug: string[];
  };
}) => {
  const pathname = usePathname();
  console.log("pathname", pathname);

  if (params.slug?.length === 2) {
    return (
      <Typography variant="h4">
        {" "}
        Docs {params.slug[0]} & {params.slug[1]}{" "}
      </Typography>
    );
  } else if (params.slug?.length === 1) {
    return <Typography variant="h4"> Docs {params.slug[0]} </Typography>;
  }

  return (
    <div>
      <Typography variant="h2" color={"lightGreen"}>
        Docs Home Page
        <Typography variant="body1" color={"blue"}>
          {" "}
          <Link href={`/docs/features1/concept1`}>
            Featire-1 concept-1
          </Link>{" "}
        </Typography>
        <Typography variant="body1" color={"blue"}>
          {" "}
          <Link href={`/docs/features2/concept1`}>
            Featire-2 concept-1
          </Link>{" "}
        </Typography>
      </Typography>
    </div>
  );
};

export default CatchAllDocs;
