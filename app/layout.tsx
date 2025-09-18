import './globals.css'
import { Inter } from 'next/font/google'
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NandhaKumar - Portfolio',
  description: 'Welcome to my personal portfolio! I am a passionate web developer skilled in Next.js, React, and modern web technologies. Explore my projects, experience, and contact details.',
  openGraph: {
    title: 'NandhaKumar - Portfolio',
    description: 'A showcase of my web development projects, skills, and experiences. Built using Next.js and React.',
    url: 'https://yourwebsite.com', // Replace with your actual domain
    type: 'website',
    images: [
      {
        url: '/images/footer/logo.png', // Publicly accessible image path
        width: 1200,
        height: 630,
        alt: 'NandhaKumar Portfolio Logo',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
        
        {/* Add Favicon Links */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Meta Tags */}
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="NandhaKumar, Portfolio, Web Developer, Next.js, React, Projects, UI/UX" />
        <meta name="author" content="NandhaKumar" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={`${metadata.openGraph.images[0].width}`} />
        <meta property="og:image:height" content={`${metadata.openGraph.images[0].height}`} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.openGraph.title} />
        <meta name="twitter:description" content={metadata.openGraph.description} />
        <meta name="twitter:image" content={metadata.openGraph.images[0].url} />

        <title>{metadata.title}</title>
      </head>
      <body className={`${inter.className} bg-gray-900 text-gray-100`}>
        {children}
        <ScrollToTop /> {/* 👈 Add this component here */}
      </body>
    </html>
  )
}
