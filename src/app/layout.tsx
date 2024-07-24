import type { Metadata } from "next";
import localFont from "next/font/local";
import type { PropsWithChildren } from "react";

import "./globals.css";

const figtree = localFont({
  src: "../assets/fonts/figtree-variable-font-weight.ttf",
  variable: "--font-figtree",
});

const metadata: Metadata = {
  title: "Blog Preview Card",
  description: "Frontend mentor blog preview card",
};

function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} font-figtree`}>{children}</body>
    </html>
  );
}

export { metadata };
export default RootLayout;
