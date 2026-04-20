import "./globals.css";
import { Inter } from "next/font/google";
import { SmoothScroll } from "@/components/shared/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Agustín | Full Stack Developer",
  description: "Portfolio profesional de Agustín, desarrollador Full Stack especializado en React y Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}