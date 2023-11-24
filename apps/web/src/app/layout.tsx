import './globals.css'

import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'SAE Example',

  description: 'Example frontend with a 3D model.',
  viewport: 'width=device-width, initial-scale=1'
}

export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full bg-gray-300">
      <body className="h-full bg-gray-300">{children}</body>
    </html>
  )
}
