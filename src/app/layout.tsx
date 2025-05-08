import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";


const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});


export const metadata: Metadata = {
  title: "Online Store",
  description: "A online store for all your needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={robotoMono.variable}>
      <body className="bg-gray-50">  
        {/* Header */}
       
        {children}
      </body>
    </html>
  );
}
