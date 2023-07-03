
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
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
