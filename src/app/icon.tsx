import { ImageResponse } from "next/og"

export const size = {
  width: 32,
  height: 32,
}

export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "20%",
          background: "linear-gradient(135deg, #050816 0%, #0B1020 100%)",
          border: "2px solid #1E293B",
        }}
      >
        <span
          style={{
            fontFamily: "Inter",
            fontSize: "18px",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            color: "#8BE9FD",
            lineHeight: 1,
          }}
        >
          MC
        </span>
      </div>
    ),
    { ...size }
  )
}
