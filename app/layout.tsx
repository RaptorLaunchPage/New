import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Raptor Esports Official',
  description: 'Raptor Esports is a competitive BGMI organisation focused on Performance, growth and excellence in mobile esports',
  
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
