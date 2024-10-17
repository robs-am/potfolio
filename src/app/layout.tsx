import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Roberta Amaro Portfolio',
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

const robotoMono = localFont({
  src: [
    {
      path: "./fonts/RobotoMono-Thin.ttf",
      weight: "100",
    },
    {
      path: "./fonts/RobotoMono-Light.ttf",
      weight: "200",
    },
    {
      path: "./fonts/RobotoMono-Regular.ttf",
      weight: "400",
    },
    {
      path: "./fonts/RobotoMono-Medium.ttf",
      weight: "500",
    },
    {
      path: "./fonts/RobotoMono-Bold.ttf",
      weight: "700",
    }
 
  ],
  variable: "--font-roboto-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`$${robotoMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
