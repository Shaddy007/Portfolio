import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shadman Chowdhury | SQA Engineer Portfolio",
  description:
    "Portfolio of Shadman Chowdhury, an aspiring Software Quality Assurance Engineer skilled in manual testing, API testing, SQL validation, bug reporting, and test case design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}