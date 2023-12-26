import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Snippet',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>

      </head>
      <body className={inter.className}>
        <header className='h-12 w-full bg-indigo-100'>
          <div>

          </div>
        </header>
        <main>
          <div className='container mx-auto px-20'>
            {children}  
          </div>
        </main>
        <footer className='h-12 w-full bg-indigo-700'>
          <div>
            
          </div>
        </footer>        
      </body>
    </html>
  )
}
