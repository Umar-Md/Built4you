import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Built4You",
  description: "Modern Home Construction Website"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Hwwimages/logo.png" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VG80900KCW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VG80900KCW');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
