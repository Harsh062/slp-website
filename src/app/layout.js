import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Stimulus Learning Point",
  description: "SLP Coaching Institute Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <a
          href="https://wa.me/919422926950?text=I'm%20interested%20in%20SLP%20courses"
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/whatsapp_transparent.png"
            alt="Chat on WhatsApp"
            width={80}
            height={80}
            className="whatsapp-icon"
          />
        </a>
      </body>
    </html>
  );
}
