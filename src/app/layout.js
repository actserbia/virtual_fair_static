import { Inter } from 'next/font/google'
import './globals.css'
import GridProvider from './3d/contexts/GridContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fair | React Three Fiber',
  openGraph: {
    images: [`${process.env.NEXT_PUBLIC_ROOT}/images/og1`],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GridProvider>{children}</GridProvider>
      </body>
    </html>
  )
}
