import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "animate.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">
        
        {/* Navbar */}
        <Navbar />

        {/* 🔥 IMPORTANT: padding top (navbar height fix) */}
        <main className="pt-16 min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <Footer />
        
      </body>
    </html>
  );
}