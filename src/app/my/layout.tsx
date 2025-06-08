import "../globals.css";
import type { Metadata } from "next";
import { Header } from "../components/Header";
import bg from "../../../public/bg.jpg";

export const metadata: Metadata = {
  title: "My Website",
  description: "A beautiful Next.js App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div
          className="h-screen bg-cover bg-center bg-fixed overflow-y-auto fixed top-0 left-0 w-full"
          style={{
            backgroundImage: `url(${bg.src})`,
          }}
        > 
          <Header /> 
          {children}
        </div>
      </body>
    </html>
  );
}
