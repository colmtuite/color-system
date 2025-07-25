import type { Metadata } from "next";
import "./css/style.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import RightSidebar from "./components/RightSidebar";
import { AppProvider } from "./context/AppContext";

export const metadata: Metadata = {
  title: "Color System",
  description: "Color system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <body>
        <AppProvider>
          <Header />
          <div className="main-content">
            <Sidebar />
            <div className="center-content">
              {children}
            </div>
            <RightSidebar />
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
