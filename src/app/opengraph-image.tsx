import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Agustín Merlo — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#08080b",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-150px",
            left: "-150px",
            width: "600px",
            height: "600px",
            borderRadius: "9999px",
            background:
              "radial-gradient(circle, rgba(124,92,255,0.7) 0%, transparent 60%)",
            filter: "blur(40px)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-200px",
            right: "-200px",
            width: "700px",
            height: "700px",
            borderRadius: "9999px",
            background:
              "radial-gradient(circle, rgba(236,72,153,0.45) 0%, transparent 60%)",
            filter: "blur(40px)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "20px",
            color: "#a78bfa",
            textTransform: "uppercase",
            letterSpacing: "0.25em",
            fontWeight: 700,
          }}
        >
          <span
            style={{
              width: "32px",
              height: "1px",
              background: "rgba(167, 139, 250, 0.4)",
              display: "flex",
            }}
          />
          Full Stack Developer
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "auto",
          }}
        >
          <div
            style={{
              fontSize: "120px",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Agustín</span>
            <span style={{ color: "#71717a", fontStyle: "italic", fontWeight: 300 }}>
              Merlo.
            </span>
          </div>
          <div
            style={{
              marginTop: "40px",
              fontSize: "28px",
              color: "#a1a1aa",
              maxWidth: "900px",
              display: "flex",
            }}
          >
            Construyo productos digitales rápidos, escalables y con diseño cuidado.
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            top: "80px",
            right: "80px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "#fff",
              color: "#000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              fontWeight: 900,
              letterSpacing: "-0.04em",
            }}
          >
            AM
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "16px",
              color: "#71717a",
            }}
          >
            <span
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "9999px",
                background: "#34d399",
                display: "flex",
              }}
            />
            Disponible para proyectos
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
