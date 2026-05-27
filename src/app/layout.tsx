import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Whispr — Anonymous Matchmaking & Conversation-First Dating",
  description: "Whispr is a Gen Z dating app focused on real connections. Meet strangers anonymously. Talk freely. Reveal only if the vibe matches. Because the best connections don’t start with appearances.",
  keywords: ["anonymous dating", "anonymous matchmaking", "Gen Z dating app", "conversation-first dating", "anonymous chat platform", "real connections", "Whispr"],
  metadataBase: new URL('https://whispr.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Whispr — Talk First. Reveal Later.",
    description: "An anonymous matchmaking experience where conversations come before appearances. Meet strangers anonymously. Talk freely. Reveal only if the vibe matches.",
    url: 'https://whispr.in',
    siteName: 'Whispr',
    images: [
      {
        url: '/logo_avatar.jpg',
        width: 1200,
        height: 630,
        alt: 'Whispr - Talk First. Reveal Later.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Whispr — Talk First. Reveal Later.",
    description: "An anonymous matchmaking experience where conversations come before appearances.",
    images: ['/logo_avatar.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Whispr",
  "operatingSystem": "iOS, Android, Web",
  "applicationCategory": "SocialNetworkingApplication",
  "url": "https://whispr.in",
  "description": "Whispr is a conversation-first anonymous matchmaking platform where users connect through conversations before revealing their identities.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Whispr",
    "url": "https://whispr.in"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} dark scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#0D0D0D] text-white flex flex-col font-sans selection:bg-purple-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
