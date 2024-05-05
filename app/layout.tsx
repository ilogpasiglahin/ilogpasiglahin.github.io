import './css/style.css'

import { League_Spartan, Lexend} from 'next/font/google'

import Header from '@/components/ui/header'
import Banner from '@/components/banner'

const league_spartan = League_Spartan({
  subsets: ['latin'],
  variable: '--font-league-spartan',
  display: 'swap'
})

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
  display: 'swap'
})

export const metadata = {
  title: 'Ilog Pasiglahin',
  description: 'Official website of the Ilog Pasiglahin organization',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${league_spartan.variable} ${lexend.variable} font-lexend antialiased bg-blue-25 text-gray-900`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
 