import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SEA Salon",
  description: "Haircuts and Styling - Manicure and Pedicure - Facial Treatments",
  icons: {
    icon: "/"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="">
          {children}
          <Toaster />
        </div>
      </body>
    </html>
  );
}
