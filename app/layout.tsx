import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bimbim',
  description: 'Baliqis Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
