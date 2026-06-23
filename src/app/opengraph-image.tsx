import { ImageResponse } from "next/og";

export const alt = "AK-EL Yapı premium Pimapen ve cam balkon sistemleri";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #fbf9f4 0%, #ffffff 48%, #e5e9ec 100%)",
          color: "#1e2229",
          position: "relative",
          overflow: "hidden",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 72% 20%, rgba(195,176,145,0.36), transparent 34%), radial-gradient(circle at 18% 78%, rgba(30,34,41,0.08), transparent 36%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 90,
            top: 82,
            width: 310,
            height: 430,
            border: "22px solid #ffffff",
            borderRadius: 36,
            boxShadow: "0 28px 80px rgba(30,34,41,0.2)",
            background: "linear-gradient(180deg, rgba(142,133,104,0.18), rgba(255,255,255,0.7))",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 145,
            top: 140,
            width: 200,
            height: 300,
            borderLeft: "3px solid rgba(30,34,41,0.16)",
            borderRight: "3px solid rgba(30,34,41,0.16)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: 86,
            width: 760,
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              color: "#8e8568",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 5,
              textTransform: "uppercase",
              marginBottom: 34,
            }}
          >
            <span
              style={{
                width: 72,
                height: 2,
                background: "#8e8568",
                display: "flex",
              }}
            />
            Premium Sistemler
          </div>
          <div
            style={{
              fontSize: 86,
              lineHeight: 0.94,
              fontWeight: 800,
              letterSpacing: -2,
              marginBottom: 28,
            }}
          >
            AK-EL Yapı
          </div>
          <div
            style={{
              fontSize: 34,
              lineHeight: 1.25,
              color: "rgba(30,34,41,0.72)",
              maxWidth: 650,
            }}
          >
            Pimapen, cam balkon ve yalıtım çözümlerinde ferah, sessiz ve güçlü yaşam alanları.
          </div>
        </div>
      </div>
    ),
    size
  );
}
