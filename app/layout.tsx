'use client'
import Navbar from 'ss/components/Navbar/navbar';
import './global.css'
import Footer from 'ss/components/Footer/footer';
import { ThemeProvider } from "@material-tailwind/react";

export const metadata = {
  title: "SS-Creation",
  description: "Shruti Project Showcase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <ThemeProvider>
        <Navbar />
        <main>{children}</main>
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
