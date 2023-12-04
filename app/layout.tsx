import "./globals.css";
import { Suspense } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { ThemeProvider } from "./components/theme-provider";
import Whatsapp from "./components/Whattsapp";
import Loading from "./loading";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="container mx-auto box-border min-h-screen bg-green-300 p-2 text-white dark:bg-green-950">
        <Suspense fallback={<Loading />} >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <Sidebar />
            {children}
            <Whatsapp />
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
