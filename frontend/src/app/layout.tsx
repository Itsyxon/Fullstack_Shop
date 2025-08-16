import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import NavBar from "@/components/UI/NavBar/NavBar";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "",
  description: "Магазин одежды",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Providers>
          <NavBar />
          <Container>{children}</Container>
        </Providers>
      </body>
    </html>
  );
}
