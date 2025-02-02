import type { Metadata } from "next";
import "./globals.css";
import ReduxWrapper from "@/provider/redux/ReduxWrapper";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxWrapper>
      <html lang="en">
        <body
          className={``}
        >
          {children}
        </body>
      </html>
    </ReduxWrapper>
  );
}
