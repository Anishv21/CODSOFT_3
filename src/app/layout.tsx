import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "CareerHub | Find your next opportunity", description: "A simple job portal connecting candidates and companies." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
