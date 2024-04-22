import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "10th & 12th बोर्ड का रिजल्ट घोषित",
  description: "10th & 12th बोर्ड का रिजल्ट घोषित 2024 ...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta property="og:title" content="जल्दी Result यहाँ देखे..."/>
<meta property="og:site_name" content="Result check"/>
<meta property="og:url" content="htttps//:google.com"/>
<meta property="og:type" content="website"/>
<meta property="og:description" content="10th & 12th बोर्ड का रिजल्ट घोषित 2024 ..."/>
<meta property="og:image" content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcejNfGNLQS8wDWuaBbBzLy94h5QgZKQb29Q&s"/>
<meta property="og:image" content=""/>

      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}