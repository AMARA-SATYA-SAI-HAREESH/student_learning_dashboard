import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Student Dashboard",
  description: "student learning platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black m-0 p-0">{children}</body>
    </html>
  );
}
