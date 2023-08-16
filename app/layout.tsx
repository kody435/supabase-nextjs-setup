import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Lucidian",
  description: "Lucidian, A School Management System",
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
        <main className="min-h-screen bg-white">{children}</main>
      </body>
    </html>
  );
}
