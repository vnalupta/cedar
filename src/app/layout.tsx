import type { Metadata } from "next";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Cedar Take Home",
  description: "Hacked with NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
