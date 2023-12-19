import { Inter } from 'next/font/google'
import './globals.css'
import GridProvider from './3d/contexts/GridContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Three.js for 3D User Interfaces',
  openGraph: {
    images: [`https://actserbia.github.io/virtual_fair_static/images/og1.jpg`],
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
