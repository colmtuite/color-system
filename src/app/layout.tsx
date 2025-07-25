import type { Metadata } from "next";
import "./css/style.css";
import { AppProvider } from "./context/AppContext";
import LayoutContent from "./components/LayoutContent";

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
          <LayoutContent>
            {children}
          </LayoutContent>
        </AppProvider>
      </body>
    </html>
  );
}
