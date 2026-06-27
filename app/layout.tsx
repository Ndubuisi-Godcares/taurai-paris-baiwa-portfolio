import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Taurai Paris Baiwa | Computer Science Student & Database Developer',
  description:
    'Portfolio of Taurai Paris Baiwa — CS student at Vishwakarma University, TCS intern, Oracle & SQL developer specialising in database-driven applications.',
  keywords: [
    'database developer portfolio',
    'Oracle SQL developer',
    'CS student portfolio India',
    'data analytics developer',
    'Taurai Paris Baiwa',
    'Vishwakarma University',
    'PL/SQL developer',
  ],
  authors: [{ name: 'Taurai Paris Baiwa', url: 'https://linkedin.com/in/taurai-paris-baiwa/' }],
  openGraph: {
    title: 'Taurai Paris Baiwa | Database Developer & CS Student',
    description:
      'Portfolio showcasing database development, SQL expertise, and software engineering projects.',
    type: 'website',
    locale: 'en_IN',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-[#060d1a] text-slate-200">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
