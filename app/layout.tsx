import Navbar from "./components/molecules/Navbar";
import Footer from "./components/molecules/Footer";

import "./styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import AuthProvider from "./context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "adPlace",
  description: "The best ad Website got even better!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
