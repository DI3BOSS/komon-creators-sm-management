import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const creatorName = "dbeet";

export const metadata = {
  title: `Komon Community - ${creatorName} social media management`,
  description: "Komon tech challenge made by Diego Bermúdez (di3boss)",
};
const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
