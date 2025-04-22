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
  description:
    "Stimulus Learning Point is Vidarbha’s leading coaching institute, delivering outstanding results in JEE, NEET, MHT-CET and school academics.",
  openGraph: {
    title:
      "Stimulus Learning Point – Shaping Futures Through Quality Education",
    description:
      "Join one of the most trusted coaching institutes in Vidarbha with proven results in NEET, JEE, and school exams.",
    url: "https://stimuluslearningpoint.com",
    siteName: "Stimulus Learning Point",
    images: [
      {
        url: "/logo/slp1.png", // Put this image in the public folder
        width: 1200,
        height: 630,
        alt: "Stimulus Learning Point",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/logo/favicon.ico",
  },
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
