import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a1208",
          borderRadius: 40,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 8,
            borderRadius: 34,
            border: "3px solid rgba(52, 211, 153, 0.35)",
          }}
        />
        <svg
          width="110"
          height="110"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="foliage"
              x1="16"
              y1="6"
              x2="16"
              y2="22"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#a3e635" />
              <stop offset="1" stopColor="#34d399" />
            </linearGradient>
          </defs>
          <path
            d="M16 6.5 24.5 17.25H20.25L22.75 21.25H9.25L11.75 17.25H7.5L16 6.5Z"
            fill="url(#foliage)"
          />
          <path
            d="M16 10 21.25 17.75H18.75L20.25 20.75H11.75L13.25 17.75H10.75L16 10Z"
            fill="#4ade80"
            fillOpacity="0.95"
          />
          <rect
            x="13.75"
            y="20.75"
            width="4.5"
            height="5.75"
            rx="1"
            fill="#a16207"
          />
          <rect
            x="14.5"
            y="21.25"
            width="3"
            height="4.75"
            rx="0.5"
            fill="#ca8a04"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
