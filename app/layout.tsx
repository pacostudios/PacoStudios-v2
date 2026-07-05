import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import Script from "next/script";
import { SITE_URL, SITE_NAME } from "@/app/lib/site";
import "./globals.css";

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
});

const inter = Inter({
  weight: "600",
  variable: "--font-inter",
  subsets: ["latin"],
});

const DEFAULT_TITLE = `${SITE_NAME} | Creative Technology Studio`;
const DEFAULT_DESCRIPTION =
  "Paco Studios is a creative technology studio crafting high-performing digital products — UX/UI design, web development, 3D development, branding, and chatbot solutions for ambitious brands.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "Paco Studios",
    "creative technology studio",
    "UX/UI design",
    "web development",
    "3D development",
    "branding agency",
    "chatbot solutions",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/icon.png"],
  },
  twitter: {
    card: "summary",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/icon.png"],
  },
};

import Header from "@/components/header";
import Footer from "@/components/footer";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${anton.variable} ${inter.variable} h-full overflow-x-clip`}
    >
      <body className="min-h-full flex flex-col font-sans overflow-x-clip">
        <Header />
        <main className="relative z-10 flex-1">{children}</main>
        <Footer />
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "xhj5njbiik");`}
        </Script>
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
