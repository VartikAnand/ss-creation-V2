
"use client";
 
import { ThemeProvider} from "@material-tailwind/react";
 
import Navbar from 'ss/components/Navbar/navbar';
import './global.css'
import Footer from 'ss/components/Footer/footer';

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
      <head>
      <meta name="p:domain_verify" content="72e3b18ed606aea00d409474cf3e7161"/>

      </head>
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
