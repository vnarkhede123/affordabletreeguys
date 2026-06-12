import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  const logoData = await readFile(
    path.join(process.cwd(), "public/logo.png")
  );
  const logoSrc = `data:image/jpeg;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#000000",
          overflow: "hidden",
        }}
      >
        <img
          src={logoSrc}
          alt=""
          style={{
            width: "130%",
            height: "auto",
            marginTop: "-1px",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
